import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { GenresConsumer } from '../../context/GenresContext';
import {CircleLoading} from 'react-loadingg';
import PopularSerie from './PopularSerie';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';

const PopularSeries = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [popularSeries, setPopularSeries] = useState([]);
    const chevronWidth = 30;


    async function getPopular() {
        const rawData = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        // console.log(rawData.data.results)
        setPopularSeries(rawData.data.results)
    }

    useEffect(() => {
        getPopular();
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
                            {popularSeries!==undefined ? 
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
                            
                            {popularSeries.map(popularSerie => (<PopularSerie key={popularSerie.id} series={popularSerie} genres={
                                value.seriesGenreList.filter((genre) => genre.id===popularSerie.genre_ids[0])[0].name
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

export default PopularSeries