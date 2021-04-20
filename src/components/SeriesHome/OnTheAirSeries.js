import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { GenresConsumer } from '../../context/GenresContext';
import {CircleLoading} from 'react-loadingg';
import OnTheAirSerie from './OnTheAirSerie';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';

const OnTheAirSeries = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);
    const chevronWidth = 30;


    async function getOnTheAir() {
        const rawData = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setOnTheAirSeries(rawData.data.results)
    }

    useEffect(() => {
        getOnTheAir();
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
                            <h4>On The Air</h4>
                        </div>
                        <div className="slider-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {onTheAirSeries!==undefined ? 
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
                            
                            {onTheAirSeries.map(onTheAirSerie => (<OnTheAirSerie key={onTheAirSerie.id} series={onTheAirSerie} genres={
                                value.seriesGenreList.filter((genre) => genre.id===onTheAirSerie.genre_ids[0])[0].name
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

export default OnTheAirSeries