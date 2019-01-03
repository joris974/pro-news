import React, { Component } from "react";
import TopBar from "./TopBar.js";

class TopBarContainer extends Component {
  constructor(props) {
    super(props);
    this.onChangeSource = this.onChangeSource.bind(this);
  }

  onChangeSource(event) {
    const { onChangeSource } = this.props;
    onChangeSource(event.target.value);
  }

  render() {
    const { currentSource } = this.props;

    return (
      <React.Fragment>
        <TopBar
          currentSource={currentSource}
          onChangeSource={this.onChangeSource}
        />
        {currentSource}
      </React.Fragment>
    );
  }
}

export default TopBarContainer;
