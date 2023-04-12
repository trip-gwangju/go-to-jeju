import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import "../styles/tourlist.css";
import axios from "axios";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import TourListItem from "../components/TourListItem";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function TourList() {
  const { pageNum } = useParams();
  const [tourItems, setTourItem] = useState([]);
  const visitJejuApiKey = process.env.REACT_APP_VISIT_JEJU_API_KEY;
  const URL = `https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=${visitJejuApiKey}&locale=kr&category=c1`;
  const currentItems = tourItems.slice((pageNum - 1) * 6, pageNum * 6);

  const fetchData = async () => {
    await axios.get(URL).then((res) => {
      setTourItem(res.data.items);
    });
  };

  const noPage = () => {
    alert("더이상 페이지가 존재 하지 않습니다");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tour-list-page">
      <div className="search">
        <h1>JEJU 관광지</h1>
        {/* <SearchBar /> */}
      </div>
      <div className="content">
        {pageNum === "1" ? (
          <AiOutlineCaretLeft size={44} onClick={noPage} />
        ) : (
          <Link to={`/jeju-tour/list/${pageNum - 1}`}>
            <AiOutlineCaretLeft size={44} />
          </Link>
        )}
        <div className="tour-content">
          {currentItems.map((tourItem) => {
            return (
              <TourListItem
                key={tourItem.contentsid}
                tourItem={tourItem}
                className="tour-item"
              />
            );
          })}
        </div>
        {pageNum === "17" ? (
          <AiOutlineCaretRight size={44} onClick={noPage} />
        ) : (
          <Link to={`/jeju-tour/list/${pageNum - 1 + 2}`}>
            <AiOutlineCaretRight size={44} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default TourList;
