import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Validation from './Validation';


class App extends Component {

state = {
  inputLength: 0
}

getLengthHandler = (event) => {
  this.setState({
    inputLength: event.target.value.length
  })

}


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


          <input
            type="text"
            placeholder="type something"
            onChange={ (event) => this.getLengthHandler(event)}></input>

          <Validation length={this.state.inputLength} />


      </div>
    );
  }
}

export default App;
