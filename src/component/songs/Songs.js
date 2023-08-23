import React, { useEffect, useState } from "react";
import "./Songs.css";
import CardContainer from "../cardContainer/CardContainer";
import { Button } from "@mui/material";
function Songs({ dataTop, selectedId, setSelecteID }) {
  const [selectedGernal, SetSelectedGernal] = useState("All");

  if (selectedId.length > 0) {
    // console.log(selectedId);
    dataTop = dataTop.filter((item) => item.id === selectedId);
    dataTop = dataTop[0].songs;
    // console.log(dataTop, "check");
  } else {
    dataTop = dataTop[0].songs;
  }
  if (selectedGernal !== "All") {
    dataTop = dataTop.filter((item) => item.genre.label === selectedGernal);
  }

  const handleGernalButton = (e) => {
    // console.log(e.target.value);
    SetSelectedGernal(e.target.value);
  };
  const getButtonStyle = (genre) => ({
    backgroundColor: selectedGernal === genre ? "green" : "initial",
    color: selectedGernal === genre ? "white" : "initial",
    marginRight: "10px", // Add some spacing between buttons
  });
  return (
    <>
      <h3>Songs</h3>
      <div className="ButtonCointaner">
        <Button
          onClick={handleGernalButton}
          value="All"
          style={getButtonStyle("All")}
        >
          All
        </Button>
        <Button
          onClick={handleGernalButton}
          value="Rock"
          style={getButtonStyle("Rock")}
        >
          Rock
        </Button>
        <Button
          onClick={handleGernalButton}
          value="Pop"
          style={getButtonStyle("Pop")}
        >
          Pop
        </Button>
        <Button
          onClick={handleGernalButton}
          value="Jazz"
          style={getButtonStyle("Jazz")}
        >
          Jazz
        </Button>
        <Button
          onClick={handleGernalButton}
          value="Blues"
          style={getButtonStyle("Blues")}
        >
          Blues
        </Button>
      </div>

      <CardContainer data={dataTop} setSelecteID={setSelecteID} />
    </>
  );
}

export default Songs;
