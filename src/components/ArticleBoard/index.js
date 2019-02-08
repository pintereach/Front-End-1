import React, { Component } from "react";
import { connect } from "react-redux";
import { getuserarticles } from "../../actions";
import ArticleList from "./ArticleList";
import UserList from "../ArticleBoard/UserList";

function mapStateToProps(state) {
  return {};
}

class ArticleBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }
  componentDidMount() {
    console.log("after set", this.props);
    const headersObj = {
      headers: { authorization: localStorage.getItem("token") }
    };
    this.props.getuserarticles(localStorage.getItem("userid"), headersObj);
  }

  getarticlesbyid = (id, name) => {
    this.setState({ name: name });
    const headersObj = {
      headers: { authorization: localStorage.getItem("token") }
    };
    this.props.getuserarticles(id, headersObj);
  };

  tohome = () => {
    this.props.history.push("/");
    this.setState({
      name: ""
    });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div id="header">
          <h1>Welcome, {this.props.userdata.username}</h1>
          <a onClick={this.logout}>Logout</a>
        </div>
        <div className="flex">
          <ArticleList
            {...this.props}
            tohome={this.tohome}
            name={this.state.name}
          />
          <UserList getarticlesbyid={this.getarticlesbyid} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getuserarticles }
)(ArticleBoard);
