import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import {imgURL} from "../../configs";
import css from './Movie.module.css'
import {FallbackImage} from "../FallbackImage/FallbackImage";



const Movie = ({movie}) => {
    const starProps = {
        isHalf: true,
        value: movie.vote_average / 2,
        edit: false
    };
    return (
        <div className={css.movieCard}>
            <Link className={css.movieLink} to={`/${movie.id.toString()}`}>
                <FallbackImage className={css.movieImage} src={`${imgURL}/w200/${movie.poster_path}`} alt="image"/>
                <div className={css.movieInfo}>
                    <div className={css.movieTitle}>{movie.title}</div>
                    <span className="is-flex" key={movie.vote_count}> <ReactStars {...starProps}/>({movie.vote_count})</span>
                    <div className={css.movieGenreContainer}>
                        {movie?.genre_list?.map(genre=><p key={genre.id}  className={css.movieGenre}>{genre.name}</p>)}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {Movie};