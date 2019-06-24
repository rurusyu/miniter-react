import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <>
          <input className="input" 
                 type={props.type} 
                 placeholder={props.placeholder} 
                 value={props.value}
                 name={props.name}
                 onChange={props.onChange} /> 
        </>
    );
}

export default Input;

