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

  createANewCard(){
  
    Axios
      .post("http://localhost:5000/api/collections/5f98ca136e416464aba60d18/cards",{
        id: "",
        word: "",
        definition: ""
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(this.state.posts[this.state.currentCollection]._id);
      });
  
}
  createANewCollection(){
  Axios
      .post("http://localhost:5000/api/collections", {
        title: "",
        cards: ""
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
}
  accessCards(){
    if(this.state.posts.length > 0){
      console.log("card", this.state.posts[this.state.currentCollection].cards[this.state.currentCard])
      return this.state.posts[this.state.currentCollection].cards[this.state.currentCard]
    }
  }
  goToNextCard(){
    let currentCardNumber = this.state.currentCard + 1;
    this.setState({currentCard: currentCardNumber});
  }
  goBackACard(){
    let currentCardNumber = this.state.currentCard - 1;
    this.setState({currentCard: currentCardNumber});

  }
  goToNextCollection(){
    let currentCollectionNumber = this.state.currentCollection + 1;
    this.setState({currentCollection: currentCollectionNumber});
  }
  goBackACollection(){
    let currentCollectionNumber = this.state.currentCollection - 1;
    this.setState({currentCollection: currentCollectionNumber});

  }
  render(){
    console.log("state", this.state);
    if(this.state.posts.length > 0){
      return (
          <div>
            <Header />
            <h1>{[collections.title]}</h1>
            <h2>click on the card to see the definition</h2>
            <Card data = {this.accessCards()} front={this.state.onFront}/>
            <button onClick={() => this.goToNextCard()}>Next Card</button>
            <button onClick={() => this.goBackACard()}>last Card</button>
            <button onClick={() => this.goToNextCollection()}>Next Collection</button>
            <button onClick={() => this.goBackACollection()}>last Collection</button>

              <form>
                <label>
                 word:
                 definition:
                <input type="text" name="word" />
                <input type="text" name="definition" />
                </label>
                <button onClick={() => this.createANewCard()}>create new card</button>
              </form>

              <br></br>
              <form>
                <label>
                 title:
                <input type="text" name="word" />
                </label>
                <button onClick={() => this.createANewCollection()}>create new collection</button>
              </form>
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
          </div>
      )
  }
  
}





export default App;
