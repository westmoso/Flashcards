import React from 'react'
import Axios from 'axios';
import './App.css';
import Card from "./cardComp/card"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [] ,
      currentcard: 0,
      currentCollection: 0,
      onFront: true
  
    //other state variables: CurrentCollection(int), currentCard(int), onFront(bool)
    //this.state.posts[this.state.currentCollection].cards[this.state.currentCard].word
  };

    componentDidMount();{
    const posts = await Axios.get(`http://localhost:5000/api/collections`);
    this.setState({ posts: posts.data });
    console.log(this.state.posts);
  }
  
  
  render(); {
    return (
     <div>
       <Card data = {this.state.posts[this.state.currentCollection].cards[currentCard]} />


     </div>
    )
  }
}


}






export default App;
