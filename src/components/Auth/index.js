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
        <div id="header">
          <div>
            <h1>Pintereach</h1>
          </div>
          <div>
            <div className="button" onClick={this.toReg}>
              Register
            </div>
            <div className="button" onClick={this.toLogin}>
              Login
            </div>
          </div>
        </div>
        {this.state.register ? (
          <Register toLogin={this.toLogin} />
        ) : (
          <Login {...this.props} />
        )}
      </div>
    );
  }
}

export default Auth;
