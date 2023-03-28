import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <ul className="header_list">
        <li>소개글</li>
        <li>날씨</li>
        <li>관광지</li>
      </ul>
    </div>
  );
}

export default Header;
