import React from 'react'
import {Link} from 'react-router-dom';

const SearchTitleMovie = ({movie, genres}) => {
    return (
        <Link to={`/details/movie/${movie.id}`} style={{textDecoration:'none'}}>
            <div className="search-title-movie-container">
                <div className="search-title-movie-container-image" style={{backgroundImage:`${movie.poster_path!==null ? `url(https://image.tmdb.org/t/p/w185/${movie.poster_path})` : 'url(https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg)'}`}}>
                </div>

                <div className="search-title-movie-container-text">
                    <p className="search-title-movie-container-text-title">
                        {movie.title}
                    </p>
                    <p className="search-title-movie-container-text-genres">
                        {genres}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default SearchTitleMovie
