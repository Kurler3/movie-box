import {Link} from 'react-router-dom'
import React from 'react'

const MoviesSeriesButtons = () => {

    return (
            <div className="movies-series-buttons-container">
                <Link to="/" style={{textDecoration:'none'}}>
                    <div className="movies-series-btn">
                        Movies
                    </div>
                </Link>
                <Link to="/series" style={{textDecoration:'none'}}>
                    <div className="movies-series-btn">
                        TV shows
                    </div>
                </Link>
            </div>
    )
}

export default MoviesSeriesButtons
