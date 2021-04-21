import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SerieReview from './SerieReview'
import { CircleLoading } from 'react-loadingg';

const SeriesReviews = ({serieID}) => {

    const [reviews, setReviews] = useState([]);

    async function getReviews() {
        const rawData = await axios.get(`https://api.themoviedb.org/3/tv/${serieID}/reviews?api_key=cfd7e9d93a8159c720cab16e6382e3eb`);

        const data = rawData.data.results;

        let reviews = [];

        if(data.length > 3) {
            for(let i=0;i<3;i++) reviews.push(data[i]);
        }else {
            reviews = data;
        }
        
        // console.log(reviews);

        setReviews(reviews);
    }

    useEffect(() => {
        getReviews();
    }, [])


    return (
        <div className="details-reviews-container">
        
            <h3 style={{textTransform:"uppercase", color:"white", fontWeight:'500', padding:'0.5em', letterSpacing:'4px'}}>Popular Reviews</h3>
            
            {(reviews!==undefined) ?
                (reviews.length!==0 ? reviews.map((item) => (<SerieReview key={item.id} review={item} />)) :
                 <p style={{padding:"1em", color:"gray", fontSize:"1.2rem"
                ,textAlign:"center"}}>There Are No Reviews</p>) 
                :
                <CircleLoading />
            }
        
            
            
        </div>
    )
}

export default SeriesReviews
