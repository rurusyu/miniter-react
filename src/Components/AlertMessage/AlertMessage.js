import React from 'react';
import './AlertMessage.css';

const AlertMessage = (props)=> {
    return (
            <p>{props.message}</p>            
    );
}
export default AlertMessage;