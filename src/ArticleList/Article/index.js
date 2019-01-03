import React from "react";
import defaultImage from "./default-image.png";
import style from "./Article.module.css";

function Article(props) {
  const { urlToImage, title, url, description } = props;

  const imageSrc =
    urlToImage === null || urlToImage === undefined || urlToImage === ""
      ? defaultImage
      : urlToImage;

  return (
    <div className={style.article}>
      <div className={style.articleMedia}>
        <img
          className={style.articleMediaImage}
          width="100"
          height="100"
          src={imageSrc}
          title={title}
          alt={title}
        />
      </div>
      <div className={style.articleContent}>
        <h2 className={style.articleTitle}>
          <a href={url} className={style.articleTitleLink}>
            {title}
          </a>
        </h2>
        <p className={style.articleText}>{description}</p>
      </div>
    </div>
  );
}

export default Article;
