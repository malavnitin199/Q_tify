import React from "react";
import Button from "@mui/material/Button";
import SearchBar from "./SearchBar";
import "./Header.css";
import PopUp from "./PopUp/PopUp";
function Head({ dataTop }) {
  const [text, SetText] = React.useState("");
  let filterSearchData =
    text.length > 0 ? dataTop.filter((ele) => ele.title.includes(text)) : "";
  console.log(text, "kkkkChweck", filterSearchData);
  return (
    <header className="header">
      <h2 style={{ color: "white", margin: "20px" }}>Q tify</h2>
      <SearchBar SetText={SetText} />
      {filterSearchData.length > 0 && (
        <PopUp filterSearchData={filterSearchData} />
      )}
      <Button
        variant="contained"
        sx={{ background: "black", color: "#34C94B", margin: "20px" }}
      >
        Give Feedback
      </Button>
    </header>
  );
}

export default Head;
