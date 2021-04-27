import axios from 'axios';
import React, {useState, useEffect} from 'react'
import DiscoverGrid from './DiscoverGrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { CircleLoading } from 'react-loadingg';



const Discover = () => {

    const [sortBy, setSortBy] = useState('popularity.desc');
    const [voteAvg, setVoteAvg] = useState(0);
    const [year, setYear] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
 

    const onSortByChanged = (e) => {
        setSortBy(e.target.value);
    }

    const onVoteAvgChanged = (e) => {
        setVoteAvg(e.target.value);
    }

    const onYearChanged = (e) => {
        setYear(e.target.value);
    }

    const onNextButtonPressed = (e) => {
        setCurrentPage(currentPage + 1);
        getDiscoverMovies();
    }

    const onPreviousButtonPressed = (e) => {
        if(currentPage!==1){
            setCurrentPage(currentPage - 1)
            getDiscoverMovies();
        } 
    }

    const onSearch = (e) => {
        e.preventDefault();

        console.log('searched');

        getDiscoverMovies();

        setVoteAvg(0);
        setYear(0);
    }

    async function getDiscoverMovies() {
        setLoading(true);

        const rawData = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cfd7e9d93a8159c720cab16e6382e3eb&sort_by=${sortBy}${voteAvg!==0 ? `&vote_count.gte=${voteAvg}` : ''}${year!==0 ? `&year=${year}` : ''}&page=${currentPage}`)

        console.log(rawData.data);
        
        setMovies(rawData.data.results)

        // After setting the new data
        setLoading(false);
    }


    useEffect(() => {
        getDiscoverMovies();
    }, []);

    return (
        <div className="discover-container">
            <h1 className="discover-container-title">Discover</h1>
            <div className="discover-container-divider"></div>
            
            <form className="discover-container-search-form" onSubmit={onSearch}>
                <div className="discover-container-search-form-container">
                    <select name="" className="discover-container-search-form-container-item" onChange={onSortByChanged}>
                        <option value="popularity.desc" selected>Popularity Descending</option>
                        <option value="popularity.asc">Popularity Ascending</option>
                        <option value="release_date.asc">Release Date Ascending</option>
                        <option value="release_date.desc">Release Date Descending</option>
                        <option value="revenue.asc">Revenue Ascending</option>
                        <option value="revenue.desc">Revenue Descending</option>
                        <option value="vote_average.asc">Vote Average Ascending</option>
                        <option value="vote_average.desc">Vote Average Descending</option>
                    </select>
                    <input  value={voteAvg!==0 ? voteAvg : ''}  className="discover-container-search-form-container-item" placeholder="Vote Average" type="number" min="0" max="10" onChange={onVoteAvgChanged}/>
                    <input value={year!==0 ? year : ''} className="discover-container-search-form-container-item" type="number" placeholder="Year" onChange={onYearChanged}/>
                </div>
                <input className="discover-container-search-form-submit" type="submit" value="Search"/>
            </form>

            {loading ? <CircleLoading /> : <DiscoverGrid movies={movies}/>}

            <div className="discover-container-page-changer-container">
                <button className="discover-container-page-changer-container-btn" onClick={onPreviousButtonPressed}>
                    <FontAwesomeIcon icon={faArrowLeft}/> Previous
                </button>
                <button className="discover-container-page-changer-container-btn" onClick={onNextButtonPressed}>
                    Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

export default Discover
