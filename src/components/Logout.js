import React, { Component } from 'react'
import { Redirect } from 'react-router'

export class Logout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        localStorage.removeItem("user")
    }
    
    render() {
      localStorage.removeItem("user");
      localStorage.removeItem("user-info")
        return (
            <div>
              <Redirect to="/login" />
            </div>
        )
    }
}

export default Logout
