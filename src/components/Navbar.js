import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to={"/"} className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/register"}>SignUp</Link>
            </li>
            <li>
              <Link to={"/login"}>LogIn</Link>
            </li>
            <li>
              <Link to={"/logout"}>LogOut</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar;
