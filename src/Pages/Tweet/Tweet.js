import React from 'react';
import './Tweet.css';
import TweetTable from '../../Components/TweetTable';
import {TweetLeftBox,TweetRightBox} from '../../Components/TweetBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
// import TweetRightBox from '../../Components/TweetBox';
import tweet_userName from '../../config';


class Tweet extends React.Component{

     state ={
        TweetList : [],
        inputMessage : "",
        username : tweet_userName,
        propfilePhoto : "",
        created_at : "",
        isUpdate : false
     }   

    dateFunc = () => {
        let date = new Date()+"";
        let arr = date.split(" "); 
        let arr1 = arr[3]+" "+ arr[1] +" "+ arr[2] +" "+ arr[4]; 
        return arr1;
    }

    handleChange =(e) => {
        this.setState({
            username : this.state.username,
            inputMessage : e.target.value,
            propfilePhoto : "😻",
            created_at : this.dateFunc(),
        });
    }

    //const 지워야함
     handleClick =(e)=>{
         console.log("트윗버튼 클릭")
        const {username,inputMessage,propfilePhoto,created_at} = this.state 
        const newTweet ={
            username : username,
            inputMessage : inputMessage,
            propfilePhoto : propfilePhoto,
            created_at : created_at            
        }

        const newTweets = [newTweet,...this.state.TweetList]
        console.log(newTweets);
        this.setState({
            inputMessage : "",
            TweetList : newTweets
        })
    }

    handleDeleteClick = (index) => {    
        const tweets = [...this.state.TweetList]
        tweets.splice(index,1)    
        this.setState({
            TweetList : tweets
        })
    }

    handleUpdateClick =(index) => {
        //버튼 글씨 바뀌게하기.
        this.setState({
            isUpdate : !this.state.isUpdate,
            inputMessage : this.state.TweetList[index].inputMessage,
            index : index
        })        
    }
    
    //반드시 분리해야함.
    handleUpdateAfterClick = (e) => {
        let tweets = [...this.state.TweetList]
        tweets[this.state.index].inputMessage = this.state.inputMessage
        this.setState({
            isUpdate : false,
            TweetList : tweets,
            inputMessage : ""
        })
    }


    render(){
        return(
            <>            
             <div className="tweet-wrap-box">
              <div className="tweet-left-box">
               <TweetLeftBox />
                <TweetTable username={tweet_userName}/>
              </div>
              <div className="tweet-right-wrap-input-box">
               <TweetRightBox onChange={this.handleChange} 
                              onClick={!this.state.isUpdate ? this.handleClick : this.handleUpdateAfterClick} 
                              value={this.state.inputMessage} 
                              innerValue={!this.state.isUpdate ? "Tweet" : "수정하기"}/>
                <ul id="list-root">
                  {
                     this.state.TweetList.map((tweet, index) => { //맵에 대한 키값 i
                         return(
                            <div className="tweet-wrap-list">
                            <div className="user-photo">{tweet.propfilePhoto}</div>
                            <div className="wrap-name-and-comment-and-times">
                              <div className="user-name">{tweet.username}</div>
                              <div className="user-comment">{tweet.inputMessage}</div>
                              <span className="written-times">{tweet.created_at}</span>
                            </div>
                            <button className="updateBtn" onClick={(e) => this.handleUpdateClick(index)}><FontAwesomeIcon icon={faPen}/></button>          
                            <button className="deleteBtn" onClick={(e) => this.handleDeleteClick(index)}><FontAwesomeIcon icon={faTrashAlt}/></button>          
                          </div> 
                         );
                     }) 
                  }
                </ul> 
              </div>
            </div>
            </>
        );
    }
} 


export default Tweet;

