import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopBar from "./TopBar";
import ArticleListContainer from "./ArticleList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentSource: "google-news"
    };

    this.onChangeSource = this.onChangeSource.bind(this);
  }

  onChangeSource(newSource) {
    this.setState({ currentSource: newSource });
  }

  render() {
    const { currentSource } = this.state;
    return (
      <div className="App">
        <header>
          <TopBar
            currentSource={currentSource}
            onChangeSource={this.onChangeSource}
          />
        </header>
        <div>
          <ArticleListContainer currentSource={currentSource} />
        </div>
      </div>
    );
  }
}

export default App;
