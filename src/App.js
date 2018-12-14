import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Auth from './Auth/Auth';
import Callback from './components/Callback';

class App extends Component {
  constructor(props){
    super(props)
    this.auth = new Auth(this.props.history)
  }
  render() {
    return (
      <>
        <Nav auth={this.auth}/>
        <div style={{padding: '20px'}}>
          <Route path="/" exact render={props => <Home auth={this.auth} {...props} /> } />
          <Route path="/callback" render={props => <Callback auth={this.auth} {...props}  /> } />
          <Route path="/profile" render={ 
          props => this.auth.isAuthenticated() ? <Profile auth={this.auth} {...props}  /> : <Redirect to="/"/> } />
        </div>

      </>
    );
  }
}

export default App;
