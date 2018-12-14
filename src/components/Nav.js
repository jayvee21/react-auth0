import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
  render() {
    const {isAuthenticated, login, logout, userHasScopes} = this.props.auth
    return (
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            { isAuthenticated()  && <li><Link to="/profile">Profile</Link></li>  }
            <li>
              <Link to="/public"> Public </Link>
            </li>
            <li>
              { isAuthenticated() && <Link to="/private"> Private </Link> }
              
            </li>
            <li>
              { isAuthenticated() && userHasScopes(["read:courses"]) && <Link to="/course"> Courses </Link> }
            </li>
            <li><button onClick={ isAuthenticated() ? logout : login }> {isAuthenticated() ? 'Logout' : 'Login'} </button></li>
        </ul>
      </nav>
    )
  }
}
