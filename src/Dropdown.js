import React from "react";
import "./Dropdown.css";

function Dropdown(props) {
  const { setDropdown } = props;
  return (
    <div id="dropdownCard">
      <select onChange={(e) => setDropdown(e.target.value)}>
        <option value="title">title</option>
        <option value="date">date</option>
        <option value="author">author</option>
      </select>
    </div>
  );
}

export default Dropdown;
