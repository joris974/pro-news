import React from "react";

import style from "./TopBar.module.css";

function TopBar(props) {
  const { currentSource, onChangeSource } = props;

  return (
    <select
      onChange={onChangeSource}
      className={style.sourceSelectionSelectInput}
      value={currentSource}
      aria-label="Select Source"
    >
      <option value="google-news">Google News</option>
      <option value="cnn">CNN</option>
      <option value="the-new-york-times">The New York Times</option>
      <option value="the-washington-post">The Washington Post</option>
      <option value="time">Time</option>
      <option value="reuters">Reuters</option>
      <option value="the-huffington-post">The Huffington Post</option>
      <option value="associated-press">Associated Press</option>
      <option value="newsweek">Newsweek</option>
      <option value="new-york-magazine">New York Magazine</option>
      <option value="usa-today">USA Today</option>
    </select>
  );
}

export default TopBar;
