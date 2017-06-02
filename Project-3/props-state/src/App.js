import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React we're learning about Props</h2>
        </div>
        <h3>The prop number is: {this.props.propNumber} </h3>
        <h3>The prop string is: {this.props.propString} </h3>
        <h3>The prop object is: {this.props.propObject.obj1} </h3>
        <Parent />
      </div>
    );
  }
}

App.propTypes = {
  propObject: React.PropTypes.object,
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "this is prop string",
  propObject: {
    obj1: "I am object 1",
    obj2: "I am object 2",
    obj3: "I am object 3"
  }
}




class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: ['s-BMW', 's-AUDI', 's-Ford']
    };
    //Bind method
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(){
    this.setState({ cars: this.state.cars.reverse()});
  }


  render(){
    return(
      <div>
        <h2 onClick={this.handleClick}>Some info here</h2>

        <Cars msg="cars are cool" model="3131" coolCars={this.state.cars}/>

      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'AUDI', 'Ford']
}


class Cars extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <h3>I am from cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item, i) => {
            return <p key={i}>{item}</p>;
          }

        )}</div>
      </div>
    );
  }
}



export default App;
