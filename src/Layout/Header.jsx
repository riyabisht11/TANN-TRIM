import React from "react";
import ham from "../assets/SVG/ham.svg";
import search from "../assets/SVG/searchicon.svg";
import logo from "../assets/SVG/TANN TRIM.svg";
import cart from "../assets/SVG/cart.svg";
import { Link } from "react-router";

function Header() {
  return (
    <nav className="max-w-screen-2xl mx-auto py-6 px-5 md:px-16 overflow-hidden shadow-md">
      <div className="navcontent flex justify-between ">
        <div className="one flex gap-15 items-end">
          <div className="menu flex gap-6 pr-24 items-end">
            <img src={ham} alt="" className="mb-1" />
            <h1 className="font-ave text-base font-normal leading-none">Menu</h1>
          </div>
          <div className="search flex gap-5 items-end">
            <img src={search} alt="" />
            <h1 className="font-ave text-base font-normal leading-none">Search</h1>
          </div>
        </div>

        <div className="logo ">
          <img src={logo} alt="" />
        </div>

        <div className="two flex gap-15">
          <div className="register">
            <h1 className="font-ave text-base font-normal">
              Register / Log In
            </h1>
          </div>
          <div className="cart px-[61px]">
            <img src={cart} alt="" />
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
