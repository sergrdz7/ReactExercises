import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Validation from './Validation';
import Char from './Char';


class App extends Component {

state = {
  userInput: ''
}

getUserInput = (event) => {
 this.setState({
   userInput: event.target.value
 })
}

deleteCharHandler = (index) => {
  //Split user input string into an array or characters
  const text = this.state.userInput.split('');
  //Remove the character at index
  text.splice(index, 1);
  //Joing array into string again
  const updatedText = text.join('');

  //update state
  this.setState({
    userInput: updatedText
  })
}
// getLengthHandler = (event) => {
//   this.setState({
//     inputLength: event.target.value.length
//   })
//
// }


  render() {

    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}></Char>
    })

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


          <input
            type="text"
            placeholder="type something"
            onChange={this.getUserInput}
            value={this.state.userInput}></input>

          <p>{this.state.userInput}</p>

          <Validation length={this.state.userInput.length} />
          {charList}


      </div>
    );
  }
}

export default App;
