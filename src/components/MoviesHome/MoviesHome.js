// Going to have a slidder for the latest movies first
// Then two buttons, one saying movies the other saying series
// Going to have the upcoming movies
//Popular
//Now playing
// Top Rated
//

import React from 'react'
import LatestMoviesSlider from './LatestMoviesSlider'
import MoviesSeriesButtons from '../MoviesSeriesButtons'
import UpcomingMovies from './UpcomingMovies'
import PopularMovies from './PopularMovies'
import NowPlayingMovies from './NowPlayingMovies'
import TopRatedMovies from './TopRatedMovies'

const MoviesHome = () => {
    return (
        <div className="main-container">
            <LatestMoviesSlider />
            <MoviesSeriesButtons />
            <UpcomingMovies />
            <PopularMovies />
            <NowPlayingMovies />
            <TopRatedMovies />
        </div>
    )
}

export default MoviesHome;

