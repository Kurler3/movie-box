import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { MovieGenresConsumer } from '../../context/MoviesGenresContext';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import NowPlayingMovie from './NowPlayingMovie';

const NowPlayingMovies = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const chevronWidth = 30;


    async function getNowPlaying() {
        const rawData = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setNowPlayingMovies(rawData.data.results)
    }

    useEffect(() => {
        getNowPlaying();
    }, [])

    return (
        <MovieGenresConsumer>

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
                            <h4>Now Playing</h4>
                        </div>
                        <div className="slider-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {nowPlayingMovies!==undefined ? 
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
                            
                            {nowPlayingMovies.map(nowPlayingMovie => (<NowPlayingMovie key={nowPlayingMovie.id} movie={nowPlayingMovie} genres={
                                value.filter((genre) => genre.id===nowPlayingMovie.genre_ids[0])[0].name
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
        </MovieGenresConsumer>
    )
}

export default NowPlayingMovies
