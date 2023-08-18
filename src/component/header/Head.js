import React from "react";
import Button from "@mui/material/Button";
import SearchBar from "./SearchBar";
import "./Header.css";
function Head() {
  return (
    <header className="header">
      <h2 style={{ color: "white", margin: "20px" }}>Q tify</h2>
      <SearchBar />
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
