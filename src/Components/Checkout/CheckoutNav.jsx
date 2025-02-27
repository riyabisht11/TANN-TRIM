import React from "react";
import arrowlogo from "../../assets/SVG/arrowlogo.svg";
import logo from "../../assets/SVG/TANN TRIM.svg";
import { Link } from "react-router";

function CheckoutNav() {
  return (
    <div className="shadow-md w-full h-full">
    <nav className="max-w-screen-2xl mx-auto py-6 px-5 md:px-16 overflow-hidden shadow-md">
      <div className="navcontent flex  relative flex-col md:flex-row gap-4">
        <div className="menu flex gap-6 ">
          <Link to="/">
            <img src={arrowlogo} alt="" className="" />
          </Link>
          <h1 className="font-med text-sm md:text-base font-semibold  text-[#444C40]">
            Continue shopping
          </h1>
        </div>

        <div className="logo md:absolute md:-translate-x-1/2 md:left-1/2 ">
          <img src={logo} className="mx-auto" alt="" />
        </div>
      </div>
    </nav>
    </div>
  );
}

export default CheckoutNav;
