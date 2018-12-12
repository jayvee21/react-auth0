import React, {Component} from 'react'

class Home extends Component{

    render(){
        return(
            <div>
                 <h2> Home </h2>
                <button onClick={this.props.auth.login}> Login </button>
            </div>
        )
    }
}

export default Home