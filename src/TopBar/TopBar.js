import React from "react";
import Nav from "react-bootstrap/Nav";
import style from "./TopBar.module.css";

const CHANNELS = [
  { value: "google-news", name: "Google News" },
  { value: "cnn", name: "CNN" },
  { value: "the-new-york-times", name: "The New York Times" },
  { value: "the-washington-post", name: "The Washington Post" },
  { value: "time", name: "Time" },
  { value: "reuters", name: "Reuters" },
  { value: "the-huffington-post", name: "The Huffington Post" },
  { value: "associated-press", name: "Associated Press" },
  { value: "newsweek", name: "Newsweek" },
  { value: "new-york-magazine", name: "New York Magazine" },
  { value: "usa-today", name: "USA Today" }
];

function TopBar(props) {
  const { currentSource, onChangeSource } = props;

  const tabs = CHANNELS.map(channel => {
    const { value, name } = channel;
    const isActiveClassName = value === currentSource ? style.activeTab : "";
    const classNames = [style.tab, isActiveClassName].join(" ").trim();

    return (
      <Nav.Item
        key={value}
        onClick={() => {
          onChangeSource(value);
        }}
        className={classNames}
      >
        {name}
      </Nav.Item>
    );
  });

  return (
    <Nav
      justify
      variant="tabs"
      defaultActiveKey={currentSource}
      className={style.tabs}
    >
      {tabs}
    </Nav>
  );
}

export default TopBar;
