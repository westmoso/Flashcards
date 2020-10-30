// import React from 'react'
// import Axios from 'axios';
// import './App.css';
// import Title from './components/titlecard';

export default function Card(props){
    const [text, setText] = react.useState(props.frontSide);
    function handleClick(){
      setText(props.backSide);
    }
  
    return(
       <div className="flash-card" onClick={handleClick}>
         {text}
      </div>
    )
  }
  