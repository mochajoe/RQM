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
      
        <div style = {{height: '100vh'}}>
          <div className="container d-flex h-100">
            <div className="row align-self-center w-100" id="quote-box">
              <div className  = "col-6 mx-auto"> 
                <div className="jumbotron">
                  <div id="text">"{this.state.quotes.quote}"</div>
                  <br />
                  <div id="author"> - {this.state.quotes.author}</div>
                  <br />
                  <br />
                  <button id="new-quote" type= "button" onClick = {this.clicked} className = "btn btn-primary btn-lg">New Quote</button>
                  <a style= {{float: 'right'}} className="btn btn-primary btn-lg" id="tweet-quote" href="http://twitter.com/intent/tweet">Tweet Quote</a>
                </div>
              </div> 
            </div>
          </div>
        </div>
  
    );

  }
}

export default Quote;
