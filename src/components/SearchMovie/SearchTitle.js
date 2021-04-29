import React, {useState, useEffect, useRef} from 'react'
import { CircleLoading } from 'react-loadingg'
import SearchTitleGrid from './SearchTitleGrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const SearchTitle = (props) => {

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const mounted = useRef();

    async function getMovies() {
        setLoading(true)

        const rawData = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cfd7e9d93a8159c720cab16e6382e3eb&query=${props.match.params.title}&page=${currentPage}`)

        const data = rawData.data.results;

        // console.log(data);

        setMovies(data);

        setLoading(false);
    }

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            getMovies();
            mounted.current = true;
          } else {
            // do componentDidUpdate logic
            console.log('ComponentDidUpdate')
            getMovies();
          }
        
    }, [])

    const onNextButtonPressed = (e) => {
        setCurrentPage(currentPage + 1);
        getMovies();
    }

    const onPreviousButtonPressed = (e) => {
        if(currentPage!==1){
            setCurrentPage(currentPage - 1)
            getMovies();
        } 
    }

    return (
        <div className="search-title-container">
            <h1 className="search-title-container-title">SEARCH RESULTS FOR <span className="search-title-container-title-span">{props.match.params.title}</span></h1>

            <div className="search-title-container-divider"></div>

            {loading === true ? <CircleLoading /> : <SearchTitleGrid movies={movies}/>}
            
            <div className="search-title-container-page-changer-container">
                <button className="search-title-container-page-changer-container-btn" onClick={onPreviousButtonPressed}>
                    <FontAwesomeIcon icon={faArrowLeft}/> Previous
                </button>
                <button className="search-title-container-page-changer-container-btn" onClick={onNextButtonPressed}>
                    Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default SearchTitle
