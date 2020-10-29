import React from 'react'
import Axios from 'axios';
import './App.css';
import Title from './components/titlecard';

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }

//   import React from 'react'
  
//   export default function card() {
//       return (
//           <div>
              
//           </div>
//       )
//   }
  