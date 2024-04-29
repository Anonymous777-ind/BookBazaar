import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function Carousel() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper container"
    >
      <SwiperSlide className="min-h-96 flex">
        <div className="w-[50%] h-[100%]">
          <h5 className="font-custom-sub-heading-para ">LET'S MAKE THE BEST INVESTMENT</h5>
          <h1 className="font-custom-heading font-semibold text-6xl">There Is No Friend As Loyal As A Book</h1>
        </div>
        <div className="">

        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
