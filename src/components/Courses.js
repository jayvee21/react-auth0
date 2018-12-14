import React, { Component } from 'react'

export default class Courses extends Component {
    state = {

    }

    componentDidMount() {
        fetch("/course", {
            headers: {Authorization: `Bearer ${this.props.auth.getAccessToken()}`}
        })
        .then(response => {
            if(response.ok) return response.json()
            throw new Error("Network response was not ok.")
        })
        .then(response => this.setState({courses: response.courses}))
        .catch( error => this.setState({message: error.message}) )
    }

    render() {
        return (
            <ul>
                { this.state.courses && this.state.courses.map( course => {
                    return <li key={course.id}> {course.title} </li> 
                })}
            </ul>
        )
    }
}
