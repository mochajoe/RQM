import React, { Component } from 'react';
import './Quote.css';


class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: "",
    }
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en")
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
            <div id="text">{this.state.quotes.quoteText}</div>
            <div id="author">sdfsdfsdf</div>
            <button id="new-quote">New Quote</button>
            <a id="tweet-quote">tweet quote</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
