import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MovieGenresConsumer } from '../../context/MoviesGenresContext'
import {faStar } from '@fortawesome/free-solid-svg-icons'

const UpcomingMovie = ({movie, genres}) => {
    return (
        <div className="upcoming-card">
            <div className="upcoming-card-image">
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
                <div className="upcoming-card-image-rate">
                <p><FontAwesomeIcon icon={faStar} /> {movie.vote_average!==undefined || movie.vote_average!==null ? `${movie.vote_average}` : "0"}</p>
                </div>
            </div>
            <div className="upcoming-card-text">
                <p className="upcoming-card-text-title">{movie.title}</p>
                <p className="upcoming-card-text-genres" >{genres}</p>
            </div>
        </div>
    )
}

export default UpcomingMovie
