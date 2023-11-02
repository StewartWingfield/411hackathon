import React from "react";

function Dropdown(props) {
  const { setDropdown } = props;
  return (
    <div>
      <select onChange={(e) => setDropdown(e.target.value)}>
        <option value="title">title</option>
        <option value="date">date</option>
        <option value="author">author</option>
      </select>
    </div>
  );
}

export default Dropdown;
