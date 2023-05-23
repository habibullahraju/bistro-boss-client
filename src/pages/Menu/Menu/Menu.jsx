import React from "react";
import {Helmet} from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg"
import dessertImage from "../../../assets/menu/dessertbg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/sectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter(item => item.category === 'offered')
  const desserts = menu.filter(item => item.category === 'dessert')
  const pizzas = menu.filter(item => item.category === 'pizza')
  const salads = menu.filter(item => item.category === 'salad')
  const soups = menu.filter(item => item.category === 'soup')
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImage} title="our menu" description="Would you like to try a dish?"></Cover>
      <div>
        <SectionTitle subHeading="Dot't Miss" heading="Today's Offer"></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>

      </div>
      <div>
        <MenuCategory title="dessert" img={dessertImage} items={desserts}></MenuCategory>
      </div>
      <div className="mt-8">
      <MenuCategory title="pizza" img={pizzaImage} items={pizzas}></MenuCategory>
      </div>
      <div className="mt-8">
      <MenuCategory title="salad" img={saladImage} items={salads}></MenuCategory>
      </div>
      <div className="mt-8">
      <MenuCategory title="soup" img={soupImage} items={soups}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
