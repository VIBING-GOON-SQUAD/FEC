//import { useEffect, useState } from 'react'
const Recomendations = ({ review }) => {
  let reviewTimeView = true;
  if (
    review["at_review_time"] == undefined ||
    review["at_review_time"] == null
  ) {
    reviewTimeView = false;
  }
  if (review["recommendation"]) {
    return (
      <>
        <img
          className='thumb-pic'
          src='https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png'
        ></img>
        <h2 className='recommended'>Recommended</h2>

        <h3 className='hrs-on-rec'>{review["total_time"]} hrs on record</h3>
        {reviewTimeView && (
          <h3 className='hrs-on-rec2'>{` (${review["at_review_time"]} at review time)`}</h3>
        )}
        <img id='steam-XS-img' src='src/assets/steam-logo-XS.png'></img>
      </>
    );
  }
  {
    return (
      <>
        <img
          className='thumb-pic'
          src='https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png'
        ></img>

        <h2 className='recommended'>Not Recommended</h2>

        <h3 className='hrs-on-rec'>{review["total_time"]} hrs on record</h3>
        {reviewTimeView && (
          <h3 className='hrs-on-rec2'>{` (${review["at_review_time"]} at review time)`}</h3>
        )}
      </>
    );
  }
};

export default Recomendations;
