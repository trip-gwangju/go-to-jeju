import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="header_list">
        <li>
          <Link to="/go-to-jeju">소개글</Link>
        </li>
        <li>
          <Link to="/weather">날씨</Link>
        </li>
        <li>
          <Link to="/jeju-tour/list/1">관광지</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
