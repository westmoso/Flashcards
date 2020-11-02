import React from 'react'
import './App.css';


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
  
  