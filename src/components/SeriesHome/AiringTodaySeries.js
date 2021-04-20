import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { GenresConsumer } from '../../context/GenresContext';
import {CircleLoading} from 'react-loadingg';
import AiringTodaySerie from './AiringTodaySerie';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';

const AiringTodaySeries = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [airingSeries, setAiringSeries] = useState([]);
    const chevronWidth = 30;


    async function getUpcoming() {
        const rawData = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setAiringSeries(rawData.data.results)
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
                            <h4>Airing Today</h4>
                        </div>
                        <div className="slider-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {airingSeries!==undefined ? 
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
                            
                            {airingSeries.map(airingSerie => (<AiringTodaySerie key={airingSerie.id} series={airingSerie} genres={
                                value.seriesGenreList.filter((genre) => genre.id===airingSerie.genre_ids[0])[0].name
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

export default AiringTodaySeries