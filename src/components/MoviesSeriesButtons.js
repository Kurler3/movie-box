import {Link} from 'react-router-dom'
import React from 'react'

const MoviesSeriesButtons = () => {

    return (
            <div className="movies-series-buttons-container">
                    <Link to="/" style={{textDecoration:'none', color:'white'}} className="movies-series-btn">
                        Movies
                    </Link>

                    <Link to="/series" style={{textDecoration:'none', color:'white'}} className="movies-series-btn">
                            TV shows
                    </Link> 
            </div>
    )
}

export default MoviesSeriesButtons
