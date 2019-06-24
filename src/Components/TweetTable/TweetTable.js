import React from 'react';
import './TweetTable.css';

const TweetTable = (props) => {
    return(
        <div className="tweet-left-box-wrap-bottom">
        <p id="user-name">{props.username}</p>          
        <table>
          <th>Tweet</th>
          <th>following</th>
          <th>follower</th>
          <tr>
            <td>1</td>
            <td>19</td>
            <td>0</td>
          </tr>
        </table>          
      </div>
    )
}

export default TweetTable;  