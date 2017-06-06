import React, { Component } from 'react';

class Timer extends Component{

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000)
  }

  ticker(){
    this.setState({
      clock: new Date() - this.props.start
    })
  }

//DONT FORGET TO BIND COMPONENTS INSIDE CONSTRUCTOR
  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }
  render(){
    //FORMAT CLOCK INTOR SECONTS BY DIVIDING BY 1000
    var clockInSeconds = Math.round(this.state.clock / 1000);
    return(
      <div>
        <p>You have been on this site since: </p>
        <br />
        <span> { clockInSeconds } </span>
        <p>seconds.</p>
      </div>
    );
  }
}

export default Timer;
