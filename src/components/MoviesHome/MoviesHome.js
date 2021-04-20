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

