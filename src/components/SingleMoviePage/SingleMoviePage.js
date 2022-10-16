import ReactStars from "react-rating-stars-component";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {FallbackImage, Loader} from "../index";
import {imgURL} from "../../configs";
import css from './SingleMoviePage.module.css'
import {movieActions} from "../../redux/slices";

const SingleMoviePage = () => {
    const dispatch = useDispatch();

    const {id} = useParams()

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [id, dispatch]);

    const {currentMovie, loading} = useSelector(state => state.movieReducer)

    const starProps = {
        isHalf: true,
        value: currentMovie?.vote_average / 2,
        edit: false
    };

    return (

        <div className={css.currentMovieContainer}>
            {loading && <Loader/>}
            {!!currentMovie &&
                <div className={css.currentMovieContent}>
                    <div>
                        <h1 className={css.currentMovieTitle}>{currentMovie.title}</h1>
                        <h2 className={css.currentMovieSubtitle}> {currentMovie.tagline}</h2>
                    </div>

                    <div className={css.currentMovieInfo}>
                        <FallbackImage className={css.singleMovieImage}
                                       src={`${imgURL}/w500/${currentMovie.poster_path}`} alt="image"/>
                        <div className={css.info}>
                            <span className="is-flex is-align-items-center"
                                  key={currentMovie.vote_count}> <ReactStars {...starProps}/>({currentMovie.vote_count})</span>

                            <p><b>Time:</b> {currentMovie.runtime} min </p>
                            <p><b>Status:</b> {currentMovie.status}</p>
                            <p><b>Date release:</b> {currentMovie.release_date}</p>
                            <p><b>Revenue:</b> {currentMovie.revenue}</p>
                            <p><b>Popularity:</b> {currentMovie.popularity}</p>
                            <p><b>What is film "{currentMovie.title}" about?</b><br/> {currentMovie.overview}</p>
                            <p>{currentMovie.overview}</p>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export {SingleMoviePage};