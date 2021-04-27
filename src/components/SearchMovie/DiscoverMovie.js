import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const DiscoverMovie = ({movie}) => {
    return (
        <Link to={`/details/movie/${movie.id}`} style={{textDecoration:'none'}}>
            <div className="discover-card">
                <div className="discover-card-image" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w185/${movie.poster_path})`}}>
                </div>
                <div className="discover-card-text">
                    <p className="discover-card-text-title">{movie.title}</p>
                    
                    <div className="discover-card-text-rate">
                        <p><FontAwesomeIcon icon={faStar} className="discover-card-text-rate-icon" /> {movie.vote_average!==undefined || movie.vote_average!==null ? `${movie.vote_average}` : "0"}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}

export default DiscoverMovie
