import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "../styles/search.css";

function SearchBar() {
  return (
    <div>
      <button className="select-category">
        제목 <AiOutlineDown />
      </button>
      
      <input
        className="search-bar"
        placeholder="     관광지를 찾아보세요"
      ></input>
      <button className="search-button">검색</button>
    </div>
  );
}

export default SearchBar;
