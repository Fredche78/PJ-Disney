import React from 'react';
import { Link } from 'react-router-dom';

const MoviePoster = ({ poster, id }) => {

    return (
        <div className="posterWrap">
            <Link to={`/movie/${id}`}>
                <img src={poster} alt="poster" />
            </Link>
        </div>
    )

}

export default MoviePoster;