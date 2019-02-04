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
      password: "",
      passwordverify: ""
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, passwordverify } = this.state;
    const newUser = {
      username: username, // (Unique) required
      displayName: "", // optional
      password: password, // required
      email: "", // (Unique) optional
      imgUrl: "" // optional
    };

    this.props.register(newUser);
    this.setState({
      username: "",
      displayname: "",
      password: ""
    });
  };

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
