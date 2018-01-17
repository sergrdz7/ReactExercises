import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Userinput from './UserComponents/userinput.js';
import Useroutput from './UserComponents/useroutput.js';

class App extends Component {

  state = {
    usernames: 'user'
  }

  userChangedHandler = (event) => {
    this.setState({
      usernames: event.target.value
    })
  }







  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Userinput
          changeUser={this.userChangedHandler}
          user={this.state.usernames}
          ></Userinput>
        <Useroutput user={this.state.usernames}></Useroutput>
      </div>
    );
  }
}

export default App;
