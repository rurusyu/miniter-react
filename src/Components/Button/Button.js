import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <>
         <button className={props.className} onClick={props.onClick} style={props.style}>{props.name}</button>   
        </>
    );
}

export default Button;

