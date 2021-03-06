import React, {useState} from 'react'
import ItemsCarousel from 'react-items-carousel';
import {CircleLoading} from 'react-loadingg';
import LeftChevron from '../LeftChevron';
import RightChevron from '../RightChevron';
import MovieCastPerson from './MovieCastPerson';

const MoviesCastSlider = ({movieCast}) => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    
    const chevronWidth = 30;

    return (
        <div className="details-slider-container">
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
