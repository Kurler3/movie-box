import React from 'react'
import {Link} from 'react-router-dom';

const LatestMovie = ({movie, genre}) => {
    return (   
        <Link to={`details/movie/${movie.id}`} style={{textDecoration:'none'}} >                  
            <div className="latest-container">
                <div className="latest-image">
                     <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                     alt={movie.title}
                     />
                     <div className="black-background-gradient"></div>        
                </div>

                <div className="latest-text-container">
                    <h2>LATEST</h2>
                    <h3 className="capitalized-text"><strong>{movie.title}</strong></h3>
                     <div className="latest-text-genres-rating">
                        <p>{genre} | {movie.vote_average} Rating</p>
                    </div>
                </div>    
            </div>  
        </Link>  
    )
}

export default LatestMovie
