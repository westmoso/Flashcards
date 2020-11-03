import React from 'react';
import Axios from 'axios';
import './App.css';
import Card from "./cardComp/card";
import {Component} from 'react';

class App extends Component {
  
      
      state = { 
      posts: [] ,
      currentCard: 0,
      currentCollection: 0,
      onFront: true
  }

  async componentDidMount(){
    
    let posts = Axios.get("http://localhost:5000/api/collections");
    posts = await posts;
    this.setState({ posts: posts.data });
    console.log(this.state.posts);
  }
  
  accessCards(){
    
    if(this.state.posts.length > 0){
      console.log("card", this.state.posts[this.state.currentCollection].cards[this.state.currentCard])
      return this.state.posts[this.state.currentCollection].cards[this.state.currentCard]
    }
  }
  render() {
    console.log("state", this.state);
    
    if(this.state.posts.length > 0){
      return (
          <div>
            <Header />
            <h2> click on the card to see the definition</h2>
            <Card data = {this.accessCards()} front={this.state.onFront}/>
          </div>
          )
    }
    else{
      return (
        <div>

        </div>
      )
    }
  }
  

}

class Header extends React.Component {
  constructor() {
      super();
      this.state = {
        collection:'',
      }
  }

  handleClick(){
      this.setState({
        collection: !this.state.front
      });
    }


  render() {
      return (
          <div className='header'>
              <div className='header-content header-content__left'>
                  <a href="/">Home</a>
              </div>
              <div className='header-content header-content__middle'>
               Add A Card
        </div>
              <div className='header-content header-content__right'>
                  <div class="dropdown">
                      <span>Pick A Deck</span>
                      <div class="dropdown-content">
                          <p>C#</p>
                          <p>React</p>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}





export default App;
