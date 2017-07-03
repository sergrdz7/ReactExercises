import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component{

  onLogin(){
    this.props.onLogin();
  }

  onLogout(){
    this.props.onLogout();
  }

  render(){
    let navItem;
    if(this.props.idToken){
      //logout
      // console.log("ID: " + this.props.idToken)
      navItem = <NavItem onClick={this.onLogout.bind(this)} href='#'>Logout</NavItem>
    }else{
      //login
      console.log("No ID")
      navItem = <NavItem onClick={this.onLogin.bind(this)} href='#'>Login</NavItem>
    }
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Github Searcher
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {navItem}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
