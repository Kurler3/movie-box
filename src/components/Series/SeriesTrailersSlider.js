import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import SeriesTrailer from './SeriesTrailer';

const SeriesTrailersSlider = ({serieID}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [serieTrailers, setSerieTrailers] = useState([]);

    const chevronWidth = 30;

    async function getSerieTrailers(){
        const rawData = await axios.get(`http://api.themoviedb.org/3/tv/${serieID}/videos?api_key=cfd7e9d93a8159c720cab16e6382e3eb`);

        const trailers = rawData.data.results;

        // console.log(trailers);
        let trailersURLS = [];

        trailers.forEach((trailer) => {            
            trailersURLS.push(`https://www.youtube.com/watch?v=${trailer.key}`)           
        })

        // console.log(trailersURLS)

        setSerieTrailers(trailersURLS)
    }


    useEffect(() => {
        getSerieTrailers();
    }, []);

    return (
        <div className="details-slider-container">
            <h3 style={{textTransform:"uppercase", color:"white", fontWeight:'500', padding:'0.5em', letterSpacing:'4px'}}>Trailers</h3>
            {serieTrailers!==undefined ? 
            <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={2}
            gutter={20}
            leftChevron={<LeftChevron/>}
            rightChevron={<RightChevron />}
            outsideChevron
            chevronWidth={chevronWidth}
            infiniteLoop={true}
            disableSwipe={false}
            >
                {serieTrailers.map((trailerURL, index) => (<SeriesTrailer key={index} url={trailerURL}/>))}
            </ItemsCarousel> : 
            
            <CircleLoading />

            }

        </div>
    )
}

export default SeriesTrailersSlider
