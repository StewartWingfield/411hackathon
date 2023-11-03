import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const { setSearch } = props;

  return (
    <div id="searchCard">
      <h2 id="hackerNews">Search Hacker News</h2>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default SearchBar;
