import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  //Turn into one string to use as styling classes on elements
  const classes = [];
  let btnClass = '';

  if (props.showPerson){
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2){
    classes.push(classes.red); //classes = ['red']
  }

  if (props.persons.length <= 1){
    classes.push(classes.bold);//classes = ['red','bold']
  }

   return (
     <div className = {classes.Cockpit}>
       <h1>Using State</h1>
       <p className={classes.join(' ')}>Using dynamic classes</p>
       <button
         className={btnClass}
         onClick={props.clicked}>Toggle Names</button>
     </div>
);
}

export default cockpit;
