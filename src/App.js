import React, { Component } from "react";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">{!this.props.loggedin ? <Auth /> : <Welcome />}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedin: state.isLoggedIn
  };
}

export default connect(
  mapStateToProps,
  {}
)(App);
