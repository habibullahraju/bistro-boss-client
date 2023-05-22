import React from "react";
import SectionTitle from "../../../components/SectionTitle/sectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featuredContainer  bg-fixed text-white ">
     <div className="bg-black bg-opacity-50 p-20">
     <SectionTitle
        subHeading={"Check it out"}
        heading={"FEATURE ITEMS"}
      ></SectionTitle>
      <section className="md:flex justify-center items-center">
        <div>
          <img className="mb-6" src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <h3 className="uppercase text-xl">March 20, 2023 WHERE CAN I GET SOME?</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas laudantium at quaerat sed aliquam, numquam iusto rerum alias aliquid necessitatibus doloremque distinctio incidunt iure natus suscipit odit. Doloribus, impedit id!</p>
          <button className="btn text-white btn-outline border-b-4">Order now</button>
        </div>
      </section>
     </div>
    </div>
  );
};

export default Featured;
