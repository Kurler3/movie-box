import React, {useState, useEffect} from 'react'
import LatestMovie from './LatestMovie'
import axios from 'axios'
import Loader from "react-loader-spinner";
import {CircleLoading} from 'react-loadingg';
import { Carousel } from 'react-responsive-carousel';
import {MovieGenresConsumer} from '../../context/MoviesGenresContext'

const LatestMoviesSlider = () => {

    const [latestMovies, setLatestMovies] = useState([]);

    async function getLatests() {
        const rawData1 = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        const jsonData = rawData1.data.results
        
        let result = []

        for(let i=0; i<3; i++) result.push(jsonData[i])

        setLatestMovies(result)
    }

    useEffect(() => {
        getLatests();
      }, []);

    return (
        <MovieGenresConsumer>
            {value => {
                if(value!==undefined){
                    return (
                        <div className="latest-slider-container">
                        {latestMovies===undefined ? <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={20000} //3 secs
                        /> 
                        :
                        <Carousel autoPlay={true} interval={6000} dynamicHeight={false} infiniteLoop={true} stopOnHover={true} swipeable={true}>
                            {latestMovies.map((latestMovie) => (<LatestMovie key={latestMovie.id} movie={latestMovie} genre={
                                value.filter(element => element.id===latestMovie.genre_ids[0])[0].name
                            } />)) }
                        </Carousel>
                        } 
            </div> 
                    )
                }else {
                    return (
                        <CircleLoading
                        color="#6702BA"
                        size="large"/>
                    )
                }
                
            }}      
        </MovieGenresConsumer>
    );
}

export default LatestMoviesSlider
