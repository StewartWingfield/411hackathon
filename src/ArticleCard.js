import React from "react";

function ArticleCard(props) {
  const { article } = props;

  return (
    <div>
      <h2>{article.title}</h2>
      <a href={article.url}>{article.url} </a>
      <p>{article.points}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
      <p>{article.num_comments}</p>
    </div>
  );
}

export default ArticleCard;
