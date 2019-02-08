import React, { Component } from "react";
import { connect } from "react-redux";
import { getusers } from "../../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const headersObj = {
      headers: { authorization: localStorage.getItem("token") }
    };
    this.props.getusers(headersObj);
  }

  render() {
    return (
      <div id="sidebar">
        <div className="inner">
          <div className="menu">
            <div className="major">
              <h2>User Board List</h2>
            </div>
            {this.props.users.map(data => (
              <ul>
                <li
                  onClick={() =>
                    this.props.getarticlesbyid(data.id, data.display_name)
                  }
                >
                  {data.display_name}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { getusers }
)(UserList);
