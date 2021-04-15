import React from 'react'
import { CircleLoading } from 'react-loadingg'

const MovieCastPerson = ({person}) => {
    return (
        <div className="cast-slider-card">
            {person!==undefined ? 
            <div className="cast-slider-card-content">
                <img src={`https://image.tmdb.org/t/p/w92/${person.profile_path}`} 
                alt={person.name}/>
                <p>
                    {person.name}
                </p>
            </div>
            : 
            <CircleLoading />}


                
        </div>
    )
}

export default MovieCastPerson
