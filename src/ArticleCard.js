import React from "react";
import "./ArticleCard.css";

function ArticleCard(props) {
  const { article } = props;

  return (
    <div id="cards">
      <h2 id="articleTitleStyle">{article.title}</h2>
      <a id="articleURL" href={article.url}>
        {article.url}
      </a>
      <p id="pointsStyle">{article.points}</p>
      <p id="authorStyle">{article.author}</p>
      <p id="dateStyle">{article.created_at}</p>
      <p id="commentsStyle">{article.num_comments}</p>
    </div>
  );
}

export default ArticleCard;
