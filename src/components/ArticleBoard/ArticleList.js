import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class ArticleList extends Component {
  render() {
    return (
      <div>
        <h3>Your articles</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ArticleList);
