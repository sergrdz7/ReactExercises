import React, { Component } from 'react';

//Set database variables
var firebase = require('firebase');
var uuid = require('uuid');

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB9y5mckze5o3us8lTIT7vwRczJzWGKrmc",
    authDomain: "usurvey-4de7b.firebaseapp.com",
    databaseURL: "https://usurvey-4de7b.firebaseio.com",
    projectId: "usurvey-4de7b",
    storageBucket: "usurvey-4de7b.appspot.com",
    messagingSenderId: "50416050177"
  };
  firebase.initializeApp(config);



class Usurvey extends Component {

  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName}, () => {console.log(this.state)})
  }
  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: 'myName',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
    //Every method used inside render must be binded
    this.nameSubmit = this.nameSubmit.bind(this);


  }



  render(){
    var studentName;
    var questions;

    //Default state
    if (this.state.studentName === ''  && this.state.isSubmitted === false){
      studentName = <div>
        <h1>What is your name?</h1>
        <form onSubmit={this.nameSubmit}>
          <input className="namy" type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>
      questions = '';

    } else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1>Welcome {this.state.studentName}</h1>;
      questions = <p>Questions</p>;
    }

    return(
      <div>
        {studentName}
        ---------------------------------
        {questions}
      </div>
    );
  }
}

export default Usurvey;
