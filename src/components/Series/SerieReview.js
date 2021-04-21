import React from 'react'

const SerieReview = ({review}) => {
    return (
        <div className="review-container">
            <h4>{review.author}</h4>
            <div className="review-content-container">
             <p>{review.content}</p>
            </div>
            
            <p><a href={review.url} target="_blank">See full review...</a></p>
        </div>
    )
}

export default SerieReview
