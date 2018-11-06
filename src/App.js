import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className = "jumbotron">
        <div className = "container">
          <div id="quote-box">
            <div id="text">dhgdfgdsfgdsfg</div>
            <div id="author">sdfsdfsdf</div>
            <button id="new-quote">New Quote</button>
            <a id="tweet-quote">tweet quote</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
