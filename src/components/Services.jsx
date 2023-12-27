import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <>
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          interval={1000}
        >
          <div>
            <img src={img1} />
            <p className="legend">full stack</p>
          </div>

          <div>
            <img src={img2} />
            <p className="legend">peer to peer connection</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;