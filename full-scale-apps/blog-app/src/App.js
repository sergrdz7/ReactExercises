import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        <Header />
        <Body />
        <hr />
        <Footer />

      </div>
    );
  }
}

export default App;
