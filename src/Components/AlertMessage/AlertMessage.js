import React from 'react';
import './AlertMessage.css';

const AlertMessage = (props)=> {
    return (
        <>
          <div>
            <p>{props.message}</p>  
          </div>            
        </>
    );
}
export default AlertMessage;