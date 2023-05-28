import React from "react";
import { NavLink, Outlet} from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaBars,
  FaShoppingBag,
  FaEnvelope,
  FaChessKing,
  FaBookmark,
} from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content m-8">
      {/* flex flex-col items-center justify-center */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul
          className="menu p-4 w-80 bg-[#D1A054] text-base-content"
        >
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt /> Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart /> My Cart 
              <span className="indicator-item badge badge-secondary">{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaChessKing /> Add Review{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaBookmark /> My Booking{" "}
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/dashboard/home">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/menu">
              <FaBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
              <FaShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
