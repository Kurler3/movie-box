import React from 'react'
import {Link} from 'react-router-dom';

const LatestSerie = ({series, genre}) => {
    return (   
        <Link to={`details/series/${series.id}`} style={{textDecoration:'none'}} >                  
            <div className="latest-container">
                <div className="latest-image" style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(https://image.tmdb.org/t/p/original/${series.poster_path})`}}>
                </div>

                <div className="latest-text-container">
                    <h2>LATEST</h2>
                    <h3 className="capitalized-text"><strong>{series.name}</strong></h3>
                     <div className="latest-text-genres-rating">
                        <p>{genre} | {series.vote_average} Rating</p>
                    </div>
                </div>    
            </div>  
        </Link>  
    )
}

export default LatestSerie
