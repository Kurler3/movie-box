import React from 'react'
import ReactPlayer from 'react-player'

const MovieTrailer = ({url}) => {
    return (
        <div className="trailer-slider-card">
            <ReactPlayer className="trailer-card" url={url} controls={true} width={400} height={300}/>
        </div>
    )
}

export default MovieTrailer
