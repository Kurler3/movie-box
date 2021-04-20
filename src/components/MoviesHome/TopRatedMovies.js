import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { GenresConsumer } from '../../context/GenresContext';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import TopRatedMovie from './TopRatedMovie';

const TopRatedMovies = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const chevronWidth = 30;


    async function getTopRated() {
        const rawData = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setTopRatedMovies(rawData.data.results)
    }

    useEffect(() => {
        getTopRated();
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
                            <h4>Top Rated</h4>
                        </div>
                        <div className="slider-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {topRatedMovies!==undefined ? 
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
                            
                            {topRatedMovies.map(topRatedMovie => (<TopRatedMovie key={topRatedMovie.id} movie={topRatedMovie} genres={
                                value.moviesGenreList.filter((genre) => genre.id===topRatedMovie.genre_ids[0])[0].name
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

export default TopRatedMovies
