import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions";
import LoginForm from "./loginForm";

function mapStateToProps(state) {
  return {};
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const creds = {
      username: username, // (Unique) required
      password: password // required
    };

    this.props.login(creds);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { login }
)(Login);
