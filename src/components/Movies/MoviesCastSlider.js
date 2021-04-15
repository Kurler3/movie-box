import axios from 'axios';
import { get } from 'jquery';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import MovieCastPerson from './MovieCastPerson';

const MoviesCastSlider = ({movieID}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [movieCast, setMovieCast] = useState([]);
    
    const chevronWidth = 30;

    async function getMovieCast() {
        const rawData = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=cfd7e9d93a8159c720cab16e6382e3eb&append_to_response=credits`)

        console.log(rawData.data.credits.cast);
        setMovieCast(rawData.data.credits.cast);
    }

    useEffect(() => {
        getMovieCast()
    }, [])

    return (
        <div className="details-cast-container">
            <h3 style={{textTransform:"uppercase", color:"white", fontWeight:'500', padding:'0.5em', letterSpacing:'4px'}}>Cast</h3>
            {movieCast!==undefined ? 
            <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            gutter={20}
            leftChevron={<LeftChevron/>}
            rightChevron={<RightChevron />}
            outsideChevron
            chevronWidth={chevronWidth}
            infiniteLoop={true}
            disableSwipe={false}
            >
                {movieCast.map(person => (<MovieCastPerson key={person.id} person={person}/>))}
            </ItemsCarousel> : 
            
            <CircleLoading />

            }
            
        </div>
    )
}

export default MoviesCastSlider
