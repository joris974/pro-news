import React, { Component } from "react";
import TopBar from "./TopBar.js";

class TopBarContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeSource = this.onChangeSource.bind(this);
  }

  onChangeSource(newSource) {
    const { onChangeSource } = this.props;
    onChangeSource(newSource);
  }

  render() {
    const { currentSource } = this.props;

    return (
      <TopBar
        currentSource={currentSource}
        onChangeSource={this.onChangeSource}
      />
    );
  }
}

export default TopBarContainer;
