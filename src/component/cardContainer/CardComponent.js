import React from "react";
import Card from "@mui/material/Card";
import "./CardComponent.css";

const CardComponent = ({ content }) => {
  return (
    <div style={{ margin: "1em 0" }}>
      <Card style={{ width: "100%" }}>
        <div>
          <img
            src={content.image}
            alt="Image 1"
            style={{ height: "130px", width: "100%" }}
          />
          {/* <p className="legend">{content.slug}</p> */}
          <div className="legend">
            <p>{content.follows} Follows</p>
          </div>
        </div>
      </Card>
      <p className="card-footer">{content.slug}</p>
    </div>
  );
};

export default CardComponent;
