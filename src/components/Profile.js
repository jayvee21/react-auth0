import React, { Component } from 'react'

export default class Profile extends Component {
  state = {
    profile: null,
    error: ""
  }

  componentDidMount(){
    this.loadUserProfile()
  }

  loadUserProfile(){
    this.props.auth.getProfile((profile, error) =>{
      this.setState({profile, error})
      console.log(this.state.profile)
    })
  }

  render() {
    const {profile} = this.state
    return (
      <>
        <h1> User Profile </h1>
        { 
          (profile) ? 
            <div >
              <img src={this.state.profile.picture} alt="profile avatar" width={70} style={{marginRight: '10px'}}/> 
              <div style={{fontSize: '1.5em'}}> {profile.name} </div>
            </div>
          
          
          
          : 'Loading ' 
        }   
       
      </>
    )
  }
}
