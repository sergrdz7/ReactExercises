import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Serg', age: 30},
      { name: 'Jess', age: 35}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was successful');
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Serg', age: 30},
        { name: 'Jess', age: 40}
      ]});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: 'Serg', age: 30},
        { name: event.target.value, age: 40}
      ]
    });
    console.log(this.state);
  }

  render() {

    const myStyle ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      // <div className="App">
      //   <h1>Refreshing with React</h1>
      //   <Person name="Serg" age="20"/>
      //   <Person name="Bob" age="25"/>
      //   <Person name="Jess" age="30">My hobbies: Racing</Person>
      // </div>
      <div className="App">

        <h1>Using State</h1>

        <button
          style ={myStyle} 
          onClick={() => this.switchNameHandler('Maxiss!!')}>Switch Name</button>

        <Person
           name={this.state.persons[0].name}
          age={this.state.persons[0].age}></Person>
        <Person
           name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}></Person>
        <Person
           name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>

      </div>
    );
  }
  // return React.createELement('div', null, 'h1', 'Hi,  I\'m a react app');
}

export default App;
