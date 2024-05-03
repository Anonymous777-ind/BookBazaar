import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import hero from "../../assets/uploads/hero.png";

function CarouselSlides() {
  return (
    <section className="h-[50vh] border-2 border-green-600">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 25000000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container border-2 border-black"
      >
        <SwiperSlide className="w-full h-[50vh]">
          <div className="border-2 border-orange-600 h-[500px] flex justify-between items-center gap-[65vw]">
            <div>
              <p>LET'S MAKE THE BEST INVESTMENT</p>
              <h1>There Is No Friend As Loyal As Book</h1>
            </div>
            <div>
              <img src={hero} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 border-orange-600 h-[500px] flex justify-between items-center gap-[65vw]">
            <div className="carousel-content">
              <p>LET'S MAKE THE BEST INVESTMENT</p>
              <h1>There Is No Friend As Loyal As Book</h1>
            </div>
            <div>
              <img src={hero} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default CarouselSlides;
