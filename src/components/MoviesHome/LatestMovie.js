import React from 'react'

const LatestMovie = ({movie, genre}) => {
    return (                         
            <div className="latest-container">
                <div className="latest-image">
                    <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={movie.title}
                    />        
                </div>

                <div className="latest-text-container">
                    <h2>LATEST</h2>
                    <h3 className="capitalized-text"><strong>{movie.title}</strong></h3>
                     <div className="latest-text-genres-rating">
                        <p>{genre} | {movie.vote_average} Rating</p>
                    </div>
                </div>    
            </div>  
    )
}

export default LatestMovie
