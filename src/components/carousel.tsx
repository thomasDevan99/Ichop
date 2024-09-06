import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardComponent from "./card";
import MobileDetect from "mobile-detect";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselComp() {
  let deviceType;
  const userAgent = navigator.userAgent;

  const md = new MobileDetect(userAgent);

  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }

  console.log("deviceType", deviceType);

  //   const [isLoading, setLoading] = useState(true);

  //   useEffect(() => {
  //     setTimeout(() => setLoading(false), 3000);
  //   }, []);

  //   if (isLoading) {
  //     return <div> Loading </div>;
  //   }
  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      containerClass="react-multi-carousel-list"
      itemClass="carousel-item-padding"
      centerMode
      sliderClass="react-multi-carousel-track"
      infinite
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      swipeable={false}
      draggable={false}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      customTransition="all 1000ms"
      transitionDuration={1000}
    >
      <CardComponent text="First Card" />
      <CardComponent text="Second Card" />
      <CardComponent text="Third Card" />
      <CardComponent text="Fourth Card" />
    </Carousel>
  );
}

export default CarouselComp;
