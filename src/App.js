import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import Nav from './components/Nav'
import Auth from './Auth/Auth';
import Callback from './components/Callback';
import Public from './components/Public'
import Private from './components/Private'
import Courses from './components/Courses'

class App extends Component {
  constructor(props){
    super(props)
    this.auth = new Auth(this.props.history)
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div style={{padding: '20px'}}>
          <Route path="/" exact render={props => <Home auth={this.auth} {...props} /> } />
          <Route path="/callback" render={props => <Callback auth={this.auth} {...props}  /> } />
          <Route path="/profile" render={ 
          props => this.auth.isAuthenticated() ? <Profile auth={this.auth} {...props}  /> : <Redirect to="/"/> } />
          <Route path="/public" component={Public}/>
          <Route path="/private" render={ 
            props => this.auth.isAuthenticated() ? <Private auth={this.auth} {...props}  /> : <Redirect to="/"/> } />
          <Route path="/course" render={ 
            props => this.auth.isAuthenticated() &&  this.auth.userHasScopes(["read:courses"]) ?  
            ( <Courses auth={this.auth} {...props} /> ) : ( this.auth.login() )
          }/>
        </div>
      </>
    );
  }
}

export default App;
