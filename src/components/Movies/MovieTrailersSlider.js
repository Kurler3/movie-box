import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import MovieTrailer from './MovieTrailer';

const MovieTrailersSlider = ({movieID}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [movieTrailers, setMovieTrailers] = useState([]);

    const chevronWidth = 30;

    async function getMovieTrailers(){
        const rawData = await axios.get(`http://api.themoviedb.org/3/movie/${movieID}/videos?api_key=cfd7e9d93a8159c720cab16e6382e3eb`);

        const trailers = rawData.data.results;

        // console.log(trailers);
        let trailersURLS = [];

        trailers.forEach((trailer) => {            
            trailersURLS.push(`https://www.youtube.com/watch?v=${trailer.key}`)           
        })

        // console.log(trailersURLS)

        setMovieTrailers(trailersURLS)
    }


    useEffect(() => {
        getMovieTrailers();
    }, []);

    return (
        <div className="details-slider-container">
            <h3 style={{textTransform:"uppercase", color:"white", fontWeight:'500', padding:'0.5em', letterSpacing:'4px'}}>Trailers</h3>
            {movieTrailers!==undefined ? 
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
                {movieTrailers.map((trailerURL, index) => (<MovieTrailer key={index} url={trailerURL}/>))}
            </ItemsCarousel> : 
            
            <CircleLoading />

            }

        </div>
    )
}

export default MovieTrailersSlider
