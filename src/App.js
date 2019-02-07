import React, { Component } from "react";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import Login from "./components/Auth/Login";
import { connect } from "react-redux";

import "./App.css";
import { Route, withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   localStorage.setItem("token", this.props.token);

  //   console.log("token", localStorage);
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.token != this.props.token)
  //     localStorage.setItem("token", this.props.token);
  // }

  render() {
    return (
      <div>
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/" component={Login} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    loggedin: state.isLoggedIn,
    test: console.log(state)
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
