import React, { Component } from "react";
import { connect } from "react-redux";
import Article from "./Article";
import AddArticleForm from "./AddArticleForm";
import { addnewarticle, getuserarticles } from "../../actions";

function mapStateToProps(state) {
  return {
    articles: state.articles,
    id: state.userid,
    token: state.token
  };
}

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cover_page: "",
      link: "",
      category_ids: []
    };
  }

  componentDidMount() {}

  addnewarticle = event => {
    event.preventDefault();
    const article = this.state;
    const newarticle = {
      title: article.title,
      cover_page: article.cover_page,
      link: article.link,
      category_ids: article.category_ids
    };

    this.props.addnewarticle(this.props.token, newarticle);

    this.setState({
      title: "",
      cover_page: "",
      link: "",
      category_ids: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="cardcontainer">
        <h3>Your articles</h3>
        {this.props.articles
          ? this.props.articles.map(data => <Article {...data} />)
          : null}
        <AddArticleForm
          handleInputChange={this.handleInputChange}
          addnewarticle={this.addnewarticle}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { addnewarticle, getuserarticles }
)(ArticleList);
