import React, { Component } from "react";
import axios from "axios";
//const baseUrl = "http://localhost:3000/users?q=";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "abc",
      password: "abc@123",
    };

    this.login = this.login.bind(this);
  }
  login(e) {
    e.preventDefault();
    alert("calling login");
    console.warn(this.state);
    // fetch("http://localhost:3000/users?q="+this.state.username).then(
    //   (data) => {
    //     data.json().then((resp) => {
    //       console.warn("resp", resp);
    //       if (resp.length > 0) {
    //         alert("called if");
    //         localStorage.setItem("login", JSON.stringify(resp));
    //         alert("call to dashboard")
    //         window.location.replace('http://localhost:3001/dashboard');
    //       } else {
    //         alert("Pelase check username and password");
    //       }
    //     });
    //   }
    // );
    axios
      .get("http://localhost:3000/users?q=" + this.state.username)
      .then((resp) => {
        console.warn("resp", resp);
        if (resp.data.length > 0) {
          alert("called if");
          localStorage.setItem("login", JSON.stringify(resp.data[0].username));
          alert("call to dashboard");
          window.location.replace("http://localhost:3001/dashboard");
        } else {
          alert("Pelase check username and password");
        }
      });
  }

  render() {
    return (
      <div>
        <h1>
          <u>LogIn Form</u>
        </h1>
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="usernameHelp"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.login}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
