import React, { useEffect, useState } from "react";
import "../styles/listItem.css";

function TourListItem({ tourItem }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(tourItem.alltag.split(","));
  }, []);

  return (
    <div
      className="tour-items"
      onClick={() =>
        (window.location.href = `/jeju-tour/detail/${tourItem?.contentsid}`)
      }
    >
      <img
        src={tourItem?.repPhoto?.photoid?.imgpath}
        alt="관광지 이미지"
        className="thumb-img"
      />
      <div className="item-info">
        <h2 className="title">{tourItem?.title}</h2>
        <p className="address">{tourItem?.address}</p>
        <p className="tour-tag">
          #{tags?.[0]} #{tags?.[1]}  #{tags?.[2]}
        </p>
      </div>
    </div>
  );
}

export default TourListItem;
