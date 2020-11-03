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
    
    getNextCard(){


    }
    getNewCollection(){


    }
    createNewCard(){


    }

  
    render(){
      return (
        <div>
          <button onClick={() => this.handleClick()}>
         {this.showCardInfo()}
        </button>
           
            <button onClick={() => this.handleClick()}>
            {this.getNextCard()} 
              next Card 
              </button> 
           
            <br></br>
            <br></br>
            
            <button onClick={() => this.handleClick()}> 
            {this.getNewCollection()}
              next Collection 
              </button> 
            
            <br></br>
            <br></br>
            
            <button onClick={() => this.handleClick()}> 
             {this.createNewCard()}
             Add a new card
              </button>



        </div>
        
      )
    }
    
  }
  
  export default Card;
  