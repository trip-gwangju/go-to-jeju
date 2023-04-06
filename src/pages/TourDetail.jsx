import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/tourDetail.css";
import Map from "../components/Map";

function TourDetail() {
  const { contentId } = useParams();
  const [tourDatas, setTourDatas] = useState({});
  const [img, setImg] = useState("");
  const [tags, setTags] = useState("");
  const visitJejuApiKey = process.env.REACT_APP_VISIT_JEJU_API_KEY;

  const fetchData = async () => {
    await axios
      .get(
        `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${visitJejuApiKey}&locale=kr&cid=${contentId}`
      )
      .then((res) => {
        setTourDatas(res.data.items[0]);
        setImg(res.data.items[0].repPhoto.photoid.imgpath);
        setTags(res.data.items[0].alltag);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tag = tags.split(",");
  console.log(tourDatas);
  console.log(tag);

  return (
    <div>
      <div className="img-area">
        <img src={img} alt="관광지 이미지" className="main-img" />
        <div className="text-area">
          <p className="tour-title">{tourDatas.title}</p>
          <p className="tour-address">Address. {tourDatas.address}</p>
          <p className="tour-phonenum">
            Phone.{" "}
            {tourDatas.phoneno === "--" || tourDatas.phoneno === null ? (
              <span>전화번호 없음</span>
            ) : (
              tourDatas.phoneno
            )}
          </p>
          <p className="tour-tag">#{tag[0]} #{tag[1]} #{tag[2]} #{tag[3]}</p>
        </div>
      </div>
      <div className="content-detail">{tourDatas.introduction}</div>
      <Map Lat={tourDatas.latitude} Lng={tourDatas.longitude} />
    </div>
  );
}

export default TourDetail;
