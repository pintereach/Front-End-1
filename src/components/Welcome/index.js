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
    const data = {
      id: this.props.userid
    };
    const headersObj = {
      headers: { authorization: this.props.token }
    };
    this.props.getuserinfo(data, headersObj);
  }

  getuserinfo = () => {
    const headersObj = {
      headers: { authorization: this.props.token }
    };
  };

  render() {
    return (
      <div>
        {this.props.userdata ? (
          <ArticleBoard userdata={this.props.userdata} />
        ) : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getuserinfo }
)(Welcome);
