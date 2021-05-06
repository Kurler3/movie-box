import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { GenresConsumer } from '../../context/GenresContext';
import {CircleLoading} from 'react-loadingg';
import UpcomingMovie from './UpcomingMovie';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import useWindowDimensions from '../useWindowDimensions';

const UpcomingMovies = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const { height, width } = useWindowDimensions();
    const chevronWidth = 30;


    async function getUpcoming() {
        const rawData = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setUpcomingMovies(rawData.data.results)
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
                            <h4>Upcoming</h4>
                        </div>
                        <div className="slider-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {upcomingMovies!==undefined ? 
                            <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={width / 182}
                            gutter={20}
                            leftChevron={<LeftChevron/>}
                            rightChevron={<RightChevron />}
                            outsideChevron
                            chevronWidth={chevronWidth}
                            infiniteLoop={true}
                            disableSwipe={false}
                            >
                            
                            {upcomingMovies.map(upcomingMovie => (<UpcomingMovie key={upcomingMovie.id} movie={upcomingMovie} genres={
                                value.moviesGenreList.filter((genre) => genre.id===upcomingMovie.genre_ids[0])[0].name
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

export default UpcomingMovies
