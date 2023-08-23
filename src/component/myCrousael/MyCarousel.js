import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MyCarousel.css"; // Import your custom CSS for styling

const MyCarousel = ({ data, text, setSelecteID }) => {
  return (
    <div className="custom-carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={11}
        selectedItem={2}
      >
        {data.map((item) => (
          <div
            className="curoasalBody
            "
            onClick={() => {
              setSelecteID(item.id);
            }}
            key={item.id}
          >
            <img src={item.image} alt="SongImage" />
            <p className="legend">{item.slug ? item.slug : item.genre.label}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
