import React from 'react'
import MoviesSeriesButtons from '../MoviesSeriesButtons'
import LatestSeriesSlider from './LatestSeriesSlider'
import AiringTodaySeries from './AiringTodaySeries'
import PopularSeries from './PopularSeries'
import OnTheAirSeries from './OnTheAirSeries'
import TopRatedSeries from './TopRatedSeries'

const SeriesHome = () => {
    return (
        <div className="main-container">
            <LatestSeriesSlider />
            <MoviesSeriesButtons />
            <AiringTodaySeries />
            <PopularSeries />
            <OnTheAirSeries />
            <TopRatedSeries />
        </div>
    )
}

export default SeriesHome
