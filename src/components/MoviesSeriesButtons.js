import { Button } from 'bootstrap'
import {Link} from 'react-router-dom'
import React from 'react'

const MoviesSeriesButtons = () => {
    return (
            <div className="movies-series-buttons-container">
                <Link to="/" className="no-text-decoration">
                    <div className="movies-series-btn">
                        Movies
                    </div>
                </Link>
                <Link to="/home/series">
                    <div className="movies-series-btn">
                        TV shows
                    </div>
                </Link>
            </div>
    )
}

export default MoviesSeriesButtons
