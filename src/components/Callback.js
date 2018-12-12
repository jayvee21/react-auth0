import React, { Component } from 'react'

export default class Callback extends Component {
  componentDidMount() {
      // Handles authentication if expected values are in the URL.
      if( /access_token|id_token|error/.test(this.props.location.hash)){
        this.props.auth.handleAuthentication();
      }else{
        throw new Error("Invalid callback URL.")
      }
  }
  render() {
    return (
      <h1> Loading.. </h1>
    )
  }
}
