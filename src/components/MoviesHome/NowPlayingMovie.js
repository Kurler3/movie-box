import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'

const NowPlayingMovie = ({movie, genres}) => {
    return (
        <div className="home-slider-card">
            <div className="home-slider-card-image">
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
                <div className="home-slider-card-image-rate">
                <p><FontAwesomeIcon icon={faStar} /> {movie.vote_average!==undefined || movie.vote_average!==null ? `${movie.vote_average}` : "0"}</p>
                </div>
            </div>
            <div className="home-slider-card-text">
                <p className="home-slider-card-text-title">{movie.title}</p>
                <p className="home-slider-card-text-genres" >{genres}</p>
            </div>
        </div>
    )
}

export default NowPlayingMovie