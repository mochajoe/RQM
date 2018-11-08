import React, { Component } from 'react';
import './Quote.css';


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

      return <div>not loaded yet</div>
    }
    return (

         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <div id="quote-box" className ="jumbotron" className = "display-5">
            <div id="text">"{this.state.quotes.quote}"</div>
            <br />
            <div id="author"> - {this.state.quotes.author}</div>
            <br />
            <button id="new-quote" onClick = {this.clicked}>New Quote</button>
            <button><a id="tweet-quote" href="http://twitter.com/intent/tweet">Tweet Quote</a></button>
          </div>
        </div>
    );

  }
}

export default Quote;
