import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ArticleCard from "./ArticleCard";

function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    axios
      .get("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => {
        /* console.log(res.data.hits); */
        setArticles(res.data.hits);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(articles);

  return (
    <div className="App">
      {articles.map((article) => (
        <ArticleCard key={article.story_id} article={article} />
      ))}
    </div>
  );
}

export default App;
