import React from 'react';
import './button.css';

export default function Button() {

    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
     <div className="buttonContainer">
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
    );
  }