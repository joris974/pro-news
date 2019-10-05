import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import defaultImage from "./default-image.png";
import style from "./Article.module.css";

function Article(props) {
  const { urlToImage, title, url, description } = props;

  const imageSrc =
    urlToImage === null || urlToImage === undefined || urlToImage === ""
      ? defaultImage
      : urlToImage;

  return (
    <Row className={style.articleRow}>
      <Col xs="auto">
        <img
          className={style.articleMediaImage}
          width="100"
          height="100"
          src={imageSrc}
          title={title}
          alt={title}
        />
      </Col>
      <Col className={style.articleContent}>
        <h2 className={style.articleTitle}>
          <a href={url} className={style.articleTitleLink}>
            {title}
          </a>
        </h2>
        <p className={style.articleText}>{description}</p>
      </Col>
    </Row>
  );
}

export default Article;
