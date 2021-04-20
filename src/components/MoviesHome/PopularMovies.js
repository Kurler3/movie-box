import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { GenresConsumer } from '../../context/GenresContext';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import PopularMovie from './PopularMovie';

const PopularMovies = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [popularMovies, setPopularMovies] = useState([]);
    const chevronWidth = 30;


    async function getUpcoming() {
        const rawData = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setPopularMovies(rawData.data.results)
    }

    useEffect(() => {
        getUpcoming();
    }, [])

    return (
        <GenresConsumer>

            {value => {
                if(value===undefined) {
                    return (
                        <CircleLoading
                        color="#6702BA"
                        size="large"/>
                    )
                }else{
                    return (
                        <div className="slider-container">
                        <div className="slider-container-title">
                            <h4>Popular</h4>
                        </div>
                        <div className="slider-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {popularMovies!==undefined ? 
                            <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={7}
                            gutter={20}
                            leftChevron={<LeftChevron/>}
                            rightChevron={<RightChevron />}
                            outsideChevron
                            chevronWidth={chevronWidth}
                            infiniteLoop={true}
                            disableSwipe={false}
                            >
                            
                            {popularMovies.map(popularMovie => (<PopularMovie key={popularMovie.id} movie={popularMovie} genres={
                                value.moviesGenreList.filter((genre) => genre.id===popularMovie.genre_ids[0])[0].name
                            } />))}

                        </ItemsCarousel> : 
                            <CircleLoading
                            color="#6702BA"
                            size="large"/>
                        }   
                        </div>
                    </div>
                    )
                }
            
            }}
        </GenresConsumer>
    )
}

export default PopularMovies
