import React from 'react';
import './TweetTable.css';

const TweetTable = (props) => {
    return(
        <div className="tweet-left-box-wrap-bottom">
        <p id="user-name">{props.username}</p>          
        <table>
          <thead>  
            <tr>
              <th>Tweet</th>
              <th>following</th>
              <th>follower</th>
            </tr>          
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>19</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>          
      </div>
    )
}

export default TweetTable;  