import React, { Component } from "react";
import Auth from "./components/Auth";
import Welcome from "./components/Welcome";
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
    console.log("token", localStorage.getItem("token"));

    if (localStorage.getItem("token")) {
      return (
        <div className="App">
          poiu
          <Route exact path="/welcome" component={Welcome} />
          {/* {!localStorage.getItem('token') ? <Auth /> : <Welcome />} */}
          {/* <Route exact path='/' component={ Auth } /> */}
        </div>
      );
    } else {
      return (
        <div className="App">
          qwerty
          <Route exact path="/login" component={Auth} />
        </div>
      );
    }
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
