import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MyCarousel.css"; // Import your custom CSS for styling

const MyCarousel = ({ data }) => {
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
          <div>
            <img src={item.image} alt="Image 1" />
            <p className="legend">{item.slug}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
