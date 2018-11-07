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
          quotes:data
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
    return (
      <div className = "jumbotron">
        <div className = "container">
          <div id="quote-box">
            <div id="text">{this.state.quotes.quote}</div>
            <div id="author">{this.state.quotes.author}</div>
            <button id="new-quote" onClick = {this.clicked}>New Quote</button>
            <a id="tweet-quote" href="http://twitter.com/intent/tweet">tweet quote</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
