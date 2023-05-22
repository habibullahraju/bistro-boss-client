import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import SectionTitle from "../../../components/SectionTitle/sectionTitle";
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from "react-icons/fa";

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  console.log(reviews);
  return (
    <section className="mb-12 ">
      <SectionTitle
        subHeading="What Our Client Says"
        heading="TESTIMONIALS"
      ></SectionTitle>

      <div className=" ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="px-24 py-6 flex flex-col items-center justify-center">
                <Rating style={{maxWidth: 150}} value={review.rating} readOnly />
                <FaQuoteLeft className="text-5xl my-6" />
                <p>{review.details}</p>
                <h2 className="text-2xl text-orange-400 ">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
