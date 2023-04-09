import React from "react";
import SearchBar from "../components/SearchBar";
import '../styles/tourlist.css'

function TourList(props) {
  return (
    <div className="tour-list-page">
      <div className="search">
        <SearchBar />
      </div>
    </div>
  );
}

export default TourList;
