import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div id="header-list">
        <Link className="header-item" to="/">
          소개글
        </Link>
        <Link className="header-item" to="/weather">
          날씨
        </Link>
        <Link className="header-item" to="/jeju-tour/list">
          관광지
        </Link>
      </div>
    </div>
  );
}

export default Header;
