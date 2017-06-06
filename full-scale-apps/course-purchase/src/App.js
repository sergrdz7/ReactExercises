import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete ios10 dev', price: 199 },
      { name: 'Complete front-end dev', price: 250 },
      { name: 'Complete pentesting course', price: 150 },
      { name: 'Complete back-end dev', price: 100 }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase Page</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
