import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourName = "a mmy"
    this.state = {};
  }

sayHello(name){
  return "Hello " + name;
}

  render() {
    const myName = "sammy";
    return (
      <div className="App">
        <h2>Just some sample data: {this.yourName} </h2>
      </div>
    );
  }
}

export default App;
