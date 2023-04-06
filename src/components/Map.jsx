import React, { useEffect } from "react";
import '../styles/map.css'

const { kakao } = window;

function Map({ Lat, Lng }) {
  
  const makeMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(Lat, Lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map); // 마커 생성
    map.setZoomable(false); // 지도 확대/축소 끄기
    map.setDraggable(false); // 지도 드래그 끄기
  };

  useEffect(() => {
    makeMap();
  });

  return (
    <div className="map-area">
      <p className="map-text">위치를 확인해보세요!</p>
      <div id="map" style={{ width: "950px", height: "540px" }}></div>{" "}
    </div>
  );
}

export default Map;
