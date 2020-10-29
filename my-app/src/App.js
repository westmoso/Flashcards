import React from 'react'
import Axios from 'axios';
import './App.css';


  class App extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {posts:[] };
      //other state variables: CurrentCollection(int), currentCard(int), onFront(bool)
      //this.state.posts[this.state.currentCollection].cards[this.state.currentCard].word
    }
    async componentDidMount() {
      const posts = await Axios.get(`http://localhost:5000/api/collections`);
      this.setState({posts: PostsData });
      console.log(this.state.posts)
    }
       

    render() {
      return (
      <div>
        <header className="app-header">
        <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label>
          Question
          <input type="text" value={this.state.value} onChange={this.handleChange} /> </label>
        <input type="submit" value="Submit" />
      </form> 
        <div className="CardBody">
          <h2>Number</h2>
          {this.state.CardBody &&
            this.state.CardBody.map((CardBody, index) => {
              const Title = CardBody.Title;
              return (
                <div className="CardBody" key={index}>
                  <h2>{CardBody.name}</h2>
                  <div className="details">
                    <p>Title: {Title}</p>
                    <p>word: {CardBody.word}</p>
                    <p>definition: {CardBody.definition}</p>
                  </div>
                </div>
              );
            })}
        </div>

    </div>
  );
        </header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
      )
  }
}



export default App

