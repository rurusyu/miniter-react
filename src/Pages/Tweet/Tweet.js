import React from 'react';
import './Tweet.css';
import TweetTable from '../../Components/TweetTable/TweetTable';
import TweetLeftBox from '../../Components/TweetBox/TweetLeftBox';
import TweetRightBox from '../../Components/TweetBox/TweetRightBox';
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

    // handleUpdateChange=(e)=> {
    //     console.dir(e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[2].innerText, "안녕")
    //     const listUl = e.target.parentNode.parentNode.childNodes[1];
    //     const listUlLength = e.target.parentNode.parentNode.childNodes[1].childElementCount;
    //     console.dir(e.target.parentNode.parentNode.childNodes[1])
    //     const tweets = [...this.state.TweetList];    
    //   //  console.log(typeof e.target.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[2].innerText)
    //     for(let i=0; i<listUlLength;i++){
    //      for(let j=0; j<listUl.childNodes[i].childElementCount;i++){
    //          if(listUl.childNodes[i].childNodes[j].childNodes[2].innerText === tweets[i].created_at){
    //              console.log(i,j)
    //              tweets[i].inputMessage = e.target.value;
    //              return tweets[i].inputMessage;
    //          }
    //      }
    //     }              
    // }

    handleUpdateClick =(index) => {
        //버튼 글씨 바뀌게하기.
        if(!this.state.isUpdate){
            this.setState({
                isUpdate : true,
               
            })  
        }else if(this.state.isUpdate){
            this.setState({
              isUpdate : false
            })
        }       
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
               <TweetRightBox onChange={!this.state.isUpdate ? this.handleChange : this.handleUpdateChange} 
                              onClick={!this.state.isUpdate ? this.handleClick : this.handleUpdateClick} 
                              value={this.state.inputMessage} 
                              innerValue={!this.state.isUpdate ? "Tweet" : "수정하기"}/>
                <ul id="list-root">
                  {
                     this.state.TweetList.map((tweet, index) => { //맵에 대한 키값 i
                         return(
                            <div class="tweet-wrap-list">
                            <div class="user-photo">{tweet.propfilePhoto}</div>
                            <div class="wrap-name-and-comment-and-times">
                              <div class="user-name">{tweet.username}</div>
                              <div class="user-comment">{tweet.inputMessage}</div>
                              <span class="written-times">{tweet.created_at}</span>
                            </div>
                            <button onClick={(e) => this.handleUpdateClick(index)}>수정</button>          
                            <button onClick={(e) => this.handleDeleteClick(index)}>삭제</button>          
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
