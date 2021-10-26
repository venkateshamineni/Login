import React, { Component } from "react";
import axios from "axios";
export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }
  changeUserNameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  cancel() {
    // this.props.history.push('/employees');
    alert("Calling Cancle....");
  }
  saveOrUpdateUser= (e) => { 
      e.preventDefault();
      alert("calling save or update method......");
      console.log("state information : "+this.state.username+" "+this.state.password);
      axios.post("http://localhost:3000/users",this.state).then((result)=>{
          console.log(result);
      })
  }
  render() {
    return (
      <div>
        <h1>Registration Form</h1>
        <div className="container">
          <form>
            <div className="form-group">
              <label> Username:</label>
              <input
                type ="text"
                placeholder="Enter UserName"
                name="username"
                className="form-control"
                value={this.state.username}
                onChange={this.changeUserNameHandler}
              />
            </div>
            <div className="form-group">
              <label> Password:</label>
              <input
                type = "password"
                placeholder="Enter Password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={this.changePasswordHandler}
              />
            </div>

            <button className="btn btn-success" onClick={this.saveOrUpdateUser}>
              Save
            </button>
            <button
              className="btn btn-danger"
              onClick={this.cancel.bind(this)}
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
