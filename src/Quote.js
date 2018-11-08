import React, { Component } from 'react';
import './Quote.css';
import { PacmanLoader } from 'react-spinners';


class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
      isLoaded: false
    }
    this.clicked = this.clicked.bind(this)
  }

  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(results => results.json())
      .then( (data) => {
         this.setState({
          quotes:data,
          isLoaded:true
         })
        })
      .catch(error => console.error('Error',error))
  }

  clicked() {
     fetch("https://talaikis.com/api/quotes/random/")
      .then(results => results.json())
      .then( (data) => {
         this.setState({
          quotes:data
         })
        })
      .catch(error => console.error('Error',error))
  }

  render() {

    if(this.state.isLoaded === false) {

      return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <PacmanLoader/>
        </div>
        )
    }

    return (

         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <div id="quote-box" style={{width: '25rem',borderColor:'black'}}>
            <div id="text">"{this.state.quotes.quote}"</div>
            <br />
            <div id="author"> - {this.state.quotes.author}</div>
            <br />
            <button id="new-quote" type= "button" onClick = {this.clicked} className = "btn btn-primary btn-lg">New Quote</button>
            <button><a id="tweet-quote" href="http://twitter.com/intent/tweet">Tweet Quote</a></button>
          </div>
        </div>
    );

  }
}

export default Quote;
