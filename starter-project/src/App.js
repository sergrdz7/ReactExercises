import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      {id:'sdafa', name: 'Max', age: 28},
      {id:'adffa', name: 'Serg', age: 30},
      {id:'esssf', name: 'Jess', age: 35}
    ]
  }

  nameChangedHandler = (event, id) => {
    // personIndex holds the index of the person in the array
    // for which the id's are equal
    const personIndex = this.state.persons.findIndex( (person) => {
      return person.id === id;
    });

    // Now get the person from the State and create another person object to
    // not access state directly

      // the spread operatro will seperate all the properties
      // of the object into anther object assigned to person
      // person = {
      //   id: adslk,
      //   name: asdlkf,
      //   age: adlkja
      // }
    const person = {
      ...this.state.persons[personIndex]
    };
    //update name by the value from the input
    person.name = event.target.value;

    // find create a new temp persons object which
    // will take the name from tempPerson.name
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    // fetch all the persons
    // const fetchPersons = this.state.persons.slice();
    // different alternative to using splice
    // spread into a list
    const fetchPersons = [...this.state.persons]
    // delete current @ index
    fetchPersons.splice(personIndex, 1);
    // update the state
    this.setState({persons: fetchPersons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    //Toggle showPerson to true or false
    this.setState({
      showPerson: !doesShow
    });
  };

  render() {

    const myStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',

      ':hover': {
        backgroundColor: 'lightblue',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={ () => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}

        </div>
      );
      //Update color once persons are loaded
      myStyle.backgroundColor = 'red';
      myStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    };
    //Turn into one string to use as styling classes on elements
    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red']
    }

    if (this.state.persons.length <= 1){
      classes.push('bold');//classes = ['red','bold']
    }

    return (
      // <div className="App">
      //   <h1>Refreshing with React</h1>
      //   <Person name="Serg" age="20"/>
      //   <Person name="Bob" age="25"/>
      //   <Person name="Jess" age="30">My hobbies: Racing</Person>
      // </div>
      <StyleRoot>
        <div className="App">

          <h1>Using State</h1>
          <p className={classes.join(' ')}>Using dynamic classes</p>
          <button
            style ={myStyle}
            onClick={this.togglePersonsHandler}>Toggle Names</button>

          {persons}

        </div>
      </StyleRoot>
    );
  };
  // return React.createELement('div', null, 'h1', 'Hi,  I\'m a react app');
}

export default Radium(App);
