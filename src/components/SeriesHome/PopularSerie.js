import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const PopularSerie = ({series, genres}) => {
    return (
        <Link to={`/details/series/${series.id}`} style={{textDecoration:'none'}}>
            <div className="home-slider-card">
                <div className="home-slider-card-image">
                    <img src={`https://image.tmdb.org/t/p/w185/${series.poster_path}`} alt={series.name}/>
                    <div className="home-slider-card-image-rate">
                    <p><FontAwesomeIcon icon={faStar} /> {series.vote_average!==undefined || series.vote_average!==null ? `${series.vote_average}` : "0"}</p>
                    </div>
                </div>
                <div className="home-slider-card-text">
                    <p className="home-slider-card-text-title">{series.name}</p>
                    <p className="home-slider-card-text-genres" >{genres}</p>
                </div>
            </div>
        </Link>
    )
}

export default PopularSerie