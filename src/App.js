import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

function App() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("");

  const fetchArticles = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${search}&tags=story`)
      .then((res) => {
        /* console.log(res.data.hits); */
        setArticles(res.data.hits);
      });
  };

  const fetchArticlesByDate = () => {
    axios
      .get(
        `http://hn.algolia.com/api/v1/search_by_date?query=${search}&tags=story`
      )
      .then((res) => {
        /*  console.log(res) */
        setArticles(res.data.hits);
      });
  };

  const fetchArticlesByAuthor = () => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?tags=story,author_${search}`)
      .then((res) => {
        setArticles(res.data.hits);
      });
  };

  useEffect(() => {
    if (dropdown === "date") {
      fetchArticlesByDate();
    } else if (dropdown === "author") {
      fetchArticlesByAuthor();
    } else {
      fetchArticles();
    }
  }, [search, dropdown]);

  console.log(articles);
  console.log("search", search);
  console.log("dropdown", dropdown);

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      <Dropdown setDropdown={setDropdown} />
      {articles.map((article) => (
        <ArticleCard key={article.story_id} article={article} />
      ))}
    </div>
  );
}

export default App;
