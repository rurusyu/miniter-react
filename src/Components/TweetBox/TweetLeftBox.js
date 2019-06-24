import React from 'react';
import './TweetLeftBox.css';

const TweetLeftBox =()=> {
    return (
        <>
             <div className ="tweet-left-box-wrap-upper"> 
              <p className="tweet-upper-word">Enjoy Your Life!</p>
              <div className="user-profile-wrap">            
                <div className="user-profile"><span role="img" aria-label="camera">📷</span></div>
              </div>
            </div>  
        </>
    )
}

export default TweetLeftBox;