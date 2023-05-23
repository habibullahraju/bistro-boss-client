import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
        <p className="bg-black absolute top-0 right-0 mt-4 mr-4 px-4 text-white">${price}</p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="mb-2">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-slate-100 text-black hover:text-white border-orange-400 border-0 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
