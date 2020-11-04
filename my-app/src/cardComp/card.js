import React from 'react';
import '../App.css';


class Card extends React.Component{
    state = { 
      front: this.props.onFront
    }

    handleClick(){
      this.setState({
        front: !this.state.front
      });
    }
    
    showCardInfo(){
      if(this.state.front){
        return this.props.data.word;
      }
      else{
        return this.props.data.definition;
      }
    }
  render(){
      return (
        <div>
          <button onClick={() => this.handleClick()}>
         {this.showCardInfo()}
        </button>
        </div>
        
      )
    }
    
  }
  
  export default Card;
  