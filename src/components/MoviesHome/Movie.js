import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {CircleLoading} from 'react-loadingg'


const Movie = (props) => {

    const [movie, setMovie] = useState({});

    async function getMovie() {
        const movieRaw = await axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=cfd7e9d93a8159c720cab16e6382e3eb`);

        const data = movieRaw.data;

        console.log(data);

        setMovie(data);
    }

    useEffect(() => {
        getMovie();
    }) 

    return (
        movie!==undefined ?  <div className="details-container">
            <div className="details-container-poster-container">
                
            </div>
        </div> : 
        <CircleLoading />
    )
}

export default Movie
