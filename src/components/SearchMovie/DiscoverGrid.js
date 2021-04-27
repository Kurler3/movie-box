import React from 'react'
import DiscoverMovie from './DiscoverMovie'

const DiscoverGrid = ({movies}) => {
    return (
        <div className="discover-container-grid-container">
            {movies.map((movie) => (<DiscoverMovie key={movie.id} movie={movie}/>))}
        </div>     
    )
}

export default DiscoverGrid
