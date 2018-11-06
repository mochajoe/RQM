import React, { Component } from 'react';
import './Quote.css';


class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      quote: ''
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(results => results.json())
      .then( data => {
        let quotted =  data.quotes[9].quote
        return this.setState({
          quote:quotted
        })  
        })
    
  }

  render() {
    return (
      <div className = "jumbotron">
        <div className = "container">
          <div id="quote-box">
            <div id="text">{this.state.quote}</div>
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
