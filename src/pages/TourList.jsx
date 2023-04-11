import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/tourlist.css";
import axios from "axios";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import TourListItem from "../components/TourListItem";
import { useParams } from "react-router";

function TourList() {
  const { pageNum } = useParams();
  const [tourItems, setTourItem] = useState([]);
  const visitJejuApiKey = process.env.REACT_APP_VISIT_JEJU_API_KEY;
  const currentItems = tourItems.slice((pageNum - 1) * 6, pageNum * 6);

  const fetchData = async () => {
    await axios
      .get(
        `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${visitJejuApiKey}&locale=kr&category=c1`
      )
      .then((res) => {
        setTourItem(res.data.items);
      });
  };

  console.log(tourItems);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tour-list-page">
      <div className="search">
        <SearchBar />
      </div>
      <div className="content">
        <AiOutlineCaretLeft size={44} />
        <div className="tour-content">
          {currentItems.map((tourItem) => {
            return <TourListItem key={tourItem.contentsid} tourItem={tourItem} className='tour-item' />;
          })}
        </div>
        <AiOutlineCaretRight size={44} />
      </div>
    </div>
  );
}

export default TourList;
