import React, {Component} from 'react';

class Course extends Component {

  clicker(){
    //Reverse avtive state
    var isActive = !this.state.active;
    this.setState({active: isActive});
    this.props.sumPrice( isActive ? this.props.price : -this.props.price);
  }

  constructor(props){
    super(props);
    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this);
  }

  render(){
    return(
      <div>
        <p className={this.state.active ? 'active' : ''} onClick={this.clicker}> {this.props.name}: <b>{this.props.price}</b> </p>
      </div>
    );
  }
}

export default Course;
