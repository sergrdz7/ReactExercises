import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from './App.css';
import Person from '../components/Persons/Person/Person.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import Radium, { StyleRoot } from 'radium';

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

    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
              name={person.name}
              age={person.age}
              click={ () => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })}

        </div>
      );
      //Set styles using CSS modules
      btnClass = styles.Red;

    };
    //Turn into one string to use as styling classes on elements
    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push(styles.red); //classes = ['red']
    }

    if (this.state.persons.length <= 1){
      classes.push(styles.bold);//classes = ['red','bold']
    }

    return (

        <div className={styles.App}>

          <h1>Using State</h1>
          <p className={classes.join(' ')}>Using dynamic classes</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Names</button>

          {persons}

        </div>

    );
  };
}
export default App;
