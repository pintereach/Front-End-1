import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../../actions";
import RegisterForm from "./registerForm";

function mapStateToProps(state) {
  return {};
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordverify: ""
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
    const { username, password, passwordverify } = this.state;
    const newUser = {
      username: username, // (Unique) required
      display_name: "", // optional
      password: password, // required
      email: "", // (Unique) optional
      img_url: "" // optional
    };

    this.props.register(newUser);
    this.setState({
      username: "",
      displayname: "",
      password: ""
    });
    this.props.toLogin();
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
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
