import React from 'react'
import { CircleLoading } from 'react-loadingg'

const SeriesCastPerson = ({person}) => {
    return (
        <a href={`https://en.wikipedia.org/wiki/${person.name}`} target="_blank" style={{color:'white', textDecoration:'none'}}>
            <div className="cast-slider-card">
                    <div className="cast-slider-card-content">
                        <img src={`https://image.tmdb.org/t/p/w92/${person.profile_path}`} 
                        alt={person.name}/>
                        <p>
                            {person.name}
                        </p>
                    </div>            
            </div>
        </a>
    )
}

export default SeriesCastPerson