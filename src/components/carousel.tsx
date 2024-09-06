import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import CardComponent from "./card";
import MobileDetect from "mobile-detect";

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
  const modules = [Navigation, FreeMode];

  if (deviceType == "mobile") {
    console.log("deviceType", deviceType);
    modules.push(Autoplay);
  }

  return (
    <div style={{ width: "1280px", margin: "auto" }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop
        freeMode
        grabCursor
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={modules}
      >
        <SwiperSlide>
          <CardComponent text="First Card" />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent text="Second Card" />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent text="Third Card" />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent text="Fourth Card" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselComp;
