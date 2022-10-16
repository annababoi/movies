import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService, movieService} from "../../services";


const initialState = {
    movies: [],
    currentMovie: null,
    currentPage: 1,
    totalPages: 0,
    error: null,
    loading: false
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (query, {rejectWithValue}) => {
        try {
            const {data:moviesRes} = await movieService.getAll(query);
            const {data:genresRes} = await genreService.getAll();
            const newMovies = moviesRes.results.map(movie=>{
                let newMovie = movie
                const movieGenres = genresRes.genres.filter(genre => movie.genre_ids.includes(genre.id))
                newMovie.genre_list = movieGenres
                return newMovie
            })
            return {
                ...moviesRes,
                results: newMovies,
            }

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (query, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(query);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.loading = false;
            })
            .addCase(getAll.pending,(state, action)=> {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action)=> {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.currentMovie = action.payload
                state.loading = false;
            })
            .addCase(getById.pending,(state, action)=> {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action)=> {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.currentPage = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.loading = false
            })
            .addCase(searchMovie.pending,(state, action)=> {
                state.loading = true;
            })
            .addCase(searchMovie.rejected, (state, action)=> {
                state.error = action.payload;
                state.loading = false;
            })

});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getById,
    searchMovie
};

export {
    movieReducer,
    movieActions
}