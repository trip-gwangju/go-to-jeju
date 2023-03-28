import React from "react";
import jejuBg from "../img/jeju.jpg";
import "../styles/home.css";

function Home() {
  
    

  return (
    <div>
      <img src={jejuBg} className="jejuBg" alt="Jeju 성산일출봉" />
      <h1 className="logo">Go to JEJU</h1>
      <p className="jejuText">
        제주도는 한국에서 가장 매력적인 여행지 중 하나로 손꼽힙니다.
        <br /> 아름다운 자연 경관과 다양한 문화 유산, 맛집 등이 유혹하는 곳으로
        떠나는 것을 도와드리겠습니다
        <br />
        이곳에서 다양한 경관과 유산,맛집을 찾고 바로 떠나보세요
      </p>
    </div>
  );
}

export default Home;
