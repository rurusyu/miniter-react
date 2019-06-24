//일단 보류... CSS안먹음..
import React from 'react';
import './TweetRightBox.css';


const TweetRightBox = (props) => {
    return(
        <>
            <div className="tweet-wrap-input-img-btn">
             <textarea id="tweet-input" 
                       type="text" 
                       placeholder=" What's happening??"
                       value ={props.value} 
                       onChange={props.onChange}></textarea>
             <div className="tweet-wrap-image-btn">
               <div className="tweet-img"><span role="img" aria-label="picture">🖼</span></div>
               <button id="tweet-submit" 
                       onClick={props.onClick}
                       >{props.innerValue}</button>
             </div> 
            </div>
        </>
    )
}

export default TweetRightBox;

