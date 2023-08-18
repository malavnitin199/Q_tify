import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MyCarousel from "../myCrousael/MyCarousel";
import CardComponent from "./CardComponent";
const CardContainer = ({ data, text }) => {
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ color: "white" }}>{text} Albums</h3>
        <Button onClick={toggleView} style={{ color: "green" }}>
          {isGridView ? "Collapse" : "Show All"}
        </Button>
      </div>
      <div style={{ marginTop: "0px", width: "100%" }}>
        {isGridView ? (
          <Grid
            container
            spacing={2}
            style={{
              width: "100%",
              borderBottom: "solid green",
              paddingBottom: "15px",
            }}
          >
            {data.map((card, index) => (
              <Grid
                item
                key={index}
                xs={4}
                sm={3}
                md={1}
                style={{ width: "100%" }}
              >
                <CardComponent content={card} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div>
            <MyCarousel data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
