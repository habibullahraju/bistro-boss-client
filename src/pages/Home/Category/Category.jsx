import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/sectionTitle";

const Category = () => {
  return (
    <div className="my-20">
        <SectionTitle 
            subHeading={"--- From 11:00am to 10:00pm ---"}
            heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-center text-4xl -mt-16 text-white shadow-lg">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-center text-4xl -mt-16 text-white shadow-lg">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-center text-4xl -mt-16 text-white shadow-lg">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-center text-4xl -mt-16 text-white shadow-lg">Desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-center text-4xl -mt-16 text-white shadow-lg">Salads</h3>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Category;
