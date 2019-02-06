import React, { Component } from "react";
import { connect } from "react-redux";
import { getuserarticles } from "../../actions";
import ArticleList from "./ArticleList";

function mapStateToProps(state) {
  return {
    userid: state.userid,
    token: state.token
  };
}

class ArticleBoard extends Component {
  componentDidMount() {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    this.props.getuserarticles(this.props.userid, headersObj);

  }
  render() {
    return (
        <div>
          <h1>Welcome, {this.props.userdata.username}</h1>
          <ArticleList  />
        </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getuserarticles }
)(ArticleBoard);
