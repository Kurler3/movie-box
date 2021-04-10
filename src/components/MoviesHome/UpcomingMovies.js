import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ItemsCarousel from 'react-items-carousel';
import { MovieGenresConsumer } from '../../context/MoviesGenresContext';
import Loader from "react-loader-spinner";
import UpcomingMovie from './UpcomingMovie';

const UpcomingMovies = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const chevronWidth = 30;


    async function getUpcoming() {
        const rawData = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=cfd7e9d93a8159c720cab16e6382e3eb")
        
        console.log(rawData.data.results)
        setUpcomingMovies(rawData.data.results)
    }

    useEffect(() => {
        getUpcoming();
    }, [])

    return (
        <MovieGenresConsumer>

            {value => {
                if(value===undefined) {
                    return (
                        <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={20000} //3 secs
                    /> 
                    )
                }else{
                    return (
                        <div className="upcoming-container">
                        <div className="upcoming-container-title">
                            <h4>Upcoming</h4>
                        </div>
                        <div className="upcoming-container-slider" style={{ padding: `0 ${chevronWidth}px` }}> 
                            {upcomingMovies!==undefined ? 
                            <ItemsCarousel
                            requestToChangeActive={setActiveItemIndex}
                            activeItemIndex={activeItemIndex}
                            numberOfCards={7}
                            gutter={20}
                            leftChevron={<button>{'<'}</button>}
                            rightChevron={<button>{'>'}</button>}
                            outsideChevron
                            chevronWidth={chevronWidth}
                            infiniteLoop={true}
                            disableSwipe={false}
                            >
                            
                            {upcomingMovies.map(upcomingMovie => (<UpcomingMovie key={upcomingMovie.id} movie={upcomingMovie} genres={
                                value.filter((genre) => genre.id===upcomingMovie.genre_ids[0])[0].name
                            } />))}

                        </ItemsCarousel> : 
                            <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={20000} //3 secs
                            /> 
                        }   
                        </div>
                    </div>
                    )
                }
            
            }}
        </MovieGenresConsumer>
    )
}

export default UpcomingMovies
