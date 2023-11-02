import React from "react";

function SearchBar(props) {
  const { setSearch } = props;

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

export default SearchBar;
