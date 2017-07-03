import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github.js';
import Header from './Components/Header.js';
import Auth0Lock from 'auth0-lock';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profile: ''
    }
  }

  static defaultProps = {
    clientID: 'BGTCGBa9o91D0ksH79QIbX4Ux7h9PYzk',
    domain: 'sergrodri.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on('authenticated', (authResult) => {
      //console.log(authResult);
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error){
          // console.log(error);
          return;
        }
        //  console.log(profile);
        // SET PROFILE USING LOCAL STORAGE
        this.setProfile(authResult.idToken, profile);
      });
    });
    //Get profile in case lock has been authenticated already
    this.getProfile();
  }

  setProfile(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    //Set state from localStorage
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile(){
    if(localStorage.getItem('idToken') != null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        // console.log(this.state);
      });
    }
  }

  showLock(){
    this.lock.show();
  }
  //Empty localStorage and the state
  logout(){
    this.setState({
      idToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });
  }

  render() {
    //Check if you are logged in and call Github Component
    let gitty;
    if(this.state.idToken){
      gitty = <Github />
    }else {
      gitty = "Click on Login to view GIthub viewer"
    }
    return (
      <div className="App">
        <Header
          lock= {this.lock}
          idToken={this.state.idToken}
          onLogin = {this.showLock.bind(this)}
          onLogout = {this.logout.bind(this)}
           />
         {gitty}

      </div>
    );
  }
}

export default App;
