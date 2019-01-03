import React, { Component } from "react";
import Article from "./Article";

class ArticleListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { articlesData: [] };
  }

  componentDidMount() {
    const { currentSource } = this.props;
    this.fetchDataAndUpdateState(currentSource);
  }

  fetchDataAndUpdateState(source) {
    fetchArticlesForSource(source).then(data => {
      this.setState({ articlesData: data.articles });
    });
  }

  componentWillReceiveProps(newProps) {
    const { currentSource } = this.props;
    if (newProps.currentSource !== currentSource) {
      this.fetchDataAndUpdateState(newProps.currentSource);
    }
  }

  render() {
    const { currentSource } = this.props;
    const { articlesData } = this.state;

    const articles = articlesData.map((article, i) => (
      <Article key={`${currentSource}-${i}`} {...article} />
    ));

    return <div>{articles}</div>;
  }
}

export default ArticleListContainer;

function fetchArticlesForSource(source) {
  const newsAPIKey = "3621f07715db4ebd953601ca8d943af2";
  const baseApiEndpoint = "https://newsapi.org/v1/articles";
  const apiEndpoint = `${baseApiEndpoint}?source=${source}&apiKey=${newsAPIKey}`;

  return fetch(apiEndpoint).then(response => {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    return response.json();
  });
}
