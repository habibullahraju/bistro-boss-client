import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({items, title,  img}) => {

  return (
    <div className="space-y-8">
      { title && <Cover img={img} title={title} description="Would you like to try a dish?"></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {items.map((items) => (
          <MenuItem key={items._id} items={items}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}> 
          <button className="btn">Order Now</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
