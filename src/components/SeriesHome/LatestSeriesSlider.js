import React, {useState, useEffect} from 'react'
import LatestSerie from './LatestSerie'
import axios from 'axios'
import {CircleLoading} from 'react-loadingg';
import { Carousel } from 'react-responsive-carousel';
import {GenresConsumer} from '../../context/GenresContext'

const LatestSeriesSlider = () => {

    const [latestSeries, setLatestSeries] = useState([]);

    async function getLatests() {
        const rawData1 = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        const jsonData = rawData1.data.results
        
        // console.log(jsonData);

        let result = []

        for(let i=0; i<3; i++) result.push(jsonData[i])

        console.log(result);
        
        setLatestSeries(result)
    }

    useEffect(() => {
        getLatests();
      }, []);

    return (
        <GenresConsumer>
            {value => {
                if(value.seriesGenreList!==undefined){
                    return (
                        <div className="latest-slider-container">
                        {latestSeries===undefined ? <CircleLoading />
                        :
                        <Carousel autoPlay={true} interval={6000} dynamicHeight={false} infiniteLoop={true} stopOnHover={true} swipeable={true}>
                            {latestSeries.map((latestSerie) => (<LatestSerie key={latestSerie.id} series={latestSerie} genre={
                                value.seriesGenreList.filter(element => element.id===latestSerie.genre_ids[0])[0].name
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
        </GenresConsumer>
    );
}

export default LatestSeriesSlider
