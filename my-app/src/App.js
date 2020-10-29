import React from 'react'
import Axios from 'axios';
import './App.css';
import Title from './components/titlecard';

  class Main extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {posts:[] };
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
   
  
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  );