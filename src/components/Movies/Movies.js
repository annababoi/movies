import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {Movie} from "../Movie/Movie";
import {Loader} from "../Loader/Loader";
import css from './Movies.module.css'
import {Pagination} from "../Pagination/Pagination";

const Movies = () => {

    const dispatch = useDispatch();

    const {movies, loading} = useSelector(state => state.movieReducer);
    const location = useLocation()
    const [query, setQuery] = useSearchParams({page: '1'});
    const prevPage = () => {
        setQuery(value => ({...value.entries(), page: value.get('page') - 1}))
    }
    const nextPage = () => {
        setQuery(value => {
            const currentParams = Object.fromEntries([...value]);
            return ({...currentParams, page: +value.get('page') + 1})
        })
    }

    useEffect(() => {
        location.pathname === "/search" ? dispatch(movieActions.searchMovie({
            page: query.get('page'),
            query: query.get('search')
        })) : dispatch(movieActions.getAll(query.get('page')))
    }, [dispatch, query, location.pathname]);

    return (

        <div className={css.content}>
            {loading && <Loader/>}
            {!movies.length && <h1>There are no movies</h1>}
            { !!movies.length &&
                <div className={css.contentBox}>
                    <div className={css.Movies}>
                        {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                    </div>
                    <div className={css.pagination}>
                        <Pagination nextPage={nextPage} prevPage={prevPage}/>
                    </div>

                </div>
            }
        </div>
    );
};

export {Movies};