import React, { Component } from "react";
import { connect } from "react-redux";
import { getuserinfo } from "../../actions";
import ArticleBoard from "../ArticleBoard";

function mapStateToProps(state) {
  return {
    userdata: state.userdata[0],
    token: state.token,
    userid: state.userid,
    isFetchingAttributes: state.isFetchingAttributes,
    displayname: state.userdata.display_name
  };
}

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log("after set", this.props);
    localStorage.setItem("token", token);

    const data = {
      id: localStorage.getItem("userid")
    };
    const headersObj = {
      headers: { authorization: localStorage.getItem("token") }
    };
    this.props.getuserinfo(data, headersObj);
  }

  render() {
    return (
      <div>
        {this.props.userdata ? (
          <div id="main">
            <ArticleBoard userdata={this.props.userdata} {...this.props} />
          </div>
        ) : (
          <div>this is the welcome page</div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getuserinfo }
)(Welcome);
