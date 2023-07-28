//import { useEffect, useState } from 'react'
const Review = ({review}) => {

    return (
        <>
        <div className="TopLeftMargin">
        <h1>{review["date_posted"]}</h1>
        </div>
        <div className="TopDown">
        <p>{review["review_body"]}</p>
        </div> 
        </>
    );
  };
  
  export default Review;
  