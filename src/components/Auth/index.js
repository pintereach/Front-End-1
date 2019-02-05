import Register from "./Register";
import Login from "./Login";

import React, { Component } from "react";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: 0
    };
  }

  toLogin = () => {
    this.setState({ register: 0 });
    this.forceUpdate();
  };

  toReg = () => {
    this.setState({ register: 1 });
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div onClick={this.toReg}>Register</div>
        <div onClick={this.toLogin}>Login</div>
        {this.state.register ? <Register /> : <Login />}
      </div>
    );
  }
}

export default Auth;
