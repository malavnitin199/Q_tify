import React from "react";
import SearchList from "./SearchList";
import "./PopUp.css";

function PopUp({ filterSearchData }) {
  return (
    <div className="searchElement">
      <div
        className="container"
        style={{
          height: "224px",
          overflow: "auto",
          width: "950px",
          marginRight: "114px",
        }}
      >
        <SearchList messages={filterSearchData} />
      </div>
    </div>
  );
}

export default PopUp;
