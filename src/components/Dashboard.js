import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        const user = localStorage.getItem("login");
        return (
            <div>
                <h1>Welcome to Admin Dashboard Mr +{user}</h1>
            </div>
        )
    }
}

export default Dashboard
