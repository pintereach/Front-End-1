import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import RegisterForm from "./registerForm";
function mapStateToProps(state) {
  return {};
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }

  handleSubmit = e => {};

  render() {
    return (
      <div>
        <h1>Please register!!!</h1>
        <RegisterForm
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
  { register }
)(Register);
