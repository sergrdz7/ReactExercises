import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
    };

    // {/* /* <Person
    //    name={this.state.persons[0].name}
    //   age={this.state.persons[0].age}></Person>
    // <Person
    //    name={this.state.persons[1].name}
    //   age={this.state.persons[1].age}
    //   click={this.switchNameHandler.bind(this, 'Max!')}></Person>
    // <Person
    //    name={this.state.persons[2].name}
    //   age={this.state.persons[2].age}
    //   changed={this.nameChangedHandler}>My Hobbies: Racing</Person> */}
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
          onClick={this.togglePersonsHandler}>Toggle Names</button>

        {persons}

      </div>
    );
  };
  // return React.createELement('div', null, 'h1', 'Hi,  I\'m a react app');
}

export default App;
