import React from "react";
import jejuBg from "../img/jeju.jpg";
import "../styles/home.css";
import "../components/RecommendListDetail";
import RecommendListDetail from "../components/RecommendListDetail";

function Home() {
  return (
    <div className="mainpage">
      <img src={jejuBg} className="jejuBg" alt="Jeju 성산일출봉" />
      <h1 className="logo">Go to JEJU</h1>
      <div className="recommend">
        <div id="rec-title">
          <div>제주도의 추천 관광지를 확인해보세요!</div>
        </div>
        <div id="rec-list">
          <div id="rec-list-pic"></div>
          <div id="rec-list-info">
            <div id="rec-list-name">백록담</div>
            <div id="rec-list-address">
              <a href="https://namu.wiki/w/제주특별자치도">제주특별자치도</a>
              <a href="https://namu.wiki/w/서귀포시">서귀포시</a>
              <a href="https://namu.wiki/w/토평동(서귀포)">토평동</a> 산15-1
            </div>
          </div>
        </div>
        <RecommendListDetail />
      </div>
    </div>
  );
}

export default Home;
