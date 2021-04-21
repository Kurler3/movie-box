import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {CircleLoading} from 'react-loadingg'
import { faArrowLeft, faShare, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import SeriesCastSlider from './SeriesCastSlider'
import SeriesTrailersSlider from './SeriesTrailersSlider'
import SeriesReviews from './SeriesReviews'

const Serie = (props) => {

    const [serie, setSerie] = useState({});

    async function getSerie() {
        const serieRaw = await axios.get(`https://api.themoviedb.org/3/tv/${props.match.params.id}?api_key=cfd7e9d93a8159c720cab16e6382e3eb&append_to_response=credits`);

        const data = serieRaw.data;
        console.log(data);

        setSerie(data);
    }

    useEffect(() => {
        getSerie();
    }, []) 

    function getGenres(genres) {
        let result = '';
        if(genres!==undefined){
            if(genres.length >= 2){
                result += `${genres[0].name} | `
                result += `${genres[1].name}`
            }else {
                result += `${genres[0].name}`
            }
        }
        return result;
    }
    
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

    return (
        serie!==undefined ?  <div className="details-container">
            <Link to="/series" style={{textDecoration:'none'}}>
                <div className="back-arrow-container">
                    <FontAwesomeIcon className="back-arrow-icon" icon={faArrowLeft} />
                </div>
            </Link>
            
            <div className="details-container-poster-container" style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url('https://image.tmdb.org/t/p/original/${serie.poster_path}')`}}>
            </div>

            <div className="share-icon-container">
                    <FontAwesomeIcon className="share-icon" icon={faShare} />
            </div>

            <div className="details-container-main">
                <div className="details-container-main-intro">
                    <div className="details-container-main-intro-poster">
                        <img 
                        src={`https://image.tmdb.org/t/p/w92/${serie.poster_path}`} 
                        alt={serie.title}
                        />
                    </div>
                    <div className="details-container-main-intro-text">
                        <h1>{serie.name}</h1>
                        <div className="details-container-main-intro-text-rating">
                            <p>{serie.vote_average} | </p>
                            {serie.vote_average!==undefined ?
                            <ReactStars
                            style={{paddingLeft:'0.2em'}}
                            count={5}
                            onChange={ratingChanged}
                            size={17}
                            value={serie.vote_average/2}
                            edit={false}
                            activeColor="#ffd700"
                        /> : 
                        <CircleLoading />    
                        }
                            
                        </div>
                        <div className="details-container-main-intro-text-status-language">
                            <p>{serie.status} | </p>
                            <p style={{textTransform:"uppercase"}}> {serie.original_language}</p>
                        </div>
                        <div className="details-container-main-intro-text-genres">
                            {getGenres(serie.genres)}
                        </div>
                    </div>
                    <div className="details-container-main-intro-like-container">
                        <FontAwesomeIcon className="heart-icon" icon={faHeart} />
                    </div>
                </div>

                <div className="details-container-main-summary">
                    <span>Summary</span>
                    <br/>
                    <br/>
                    {serie.overview}
                </div>
                
                {serie.id!==undefined ? <SeriesCastSlider serieCast={serie.credits.cast}/> : <CircleLoading />} 
                {serie.id!==undefined ? <SeriesTrailersSlider serieID={serie.id} /> : <CircleLoading />}
                {serie.id!==undefined ? <SeriesReviews serieID={serie.id} /> : <CircleLoading />}
            </div>

        </div> : 
        <CircleLoading />
    )
}

export default Serie
