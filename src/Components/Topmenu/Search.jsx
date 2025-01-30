import React, { useState } from "react";
import ham from "../../assets/SVG/whiteham.svg";

import logo from "../../assets/SVG/whitelogo.svg";
import cart from "../../assets/SVG/whitecart.svg";
import cross from "../../assets/SVG/whitecross.svg";
import searchicon from "../../assets/SVG/searchicon.svg";

function Search({ functionality, open }) {
  const [showSearch, setshowSearch] = useState(true);
  return (
    <main className={`bg-[#444C40] h-screen w-full ${
      open ? "translate-y-0" : "-translate-y-full"
    } absolute inset-0 overflow-hidden z-[999] transform transition-transform duration-300 ease-in-out`}>
    <nav
      className={`   max-w-screen-2xl mx-auto py-6 px-5 md:px-16 shadow-md bg-[#444C40] h-full`}
    >
      <div className="navcontent flex justify-between ">
        <div className="one flex gap-15 items-end">
          <div className="menu flex gap-6 pr-24 items-end">
            <div className="cursor-pointer">
              <img src={ham} alt="" className="mb-1" />
            </div>

            <h1 className="font-ave text-base font-normal leading-none text-white">
              Menu
            </h1>
          </div>
          <div className="search flex gap-5 items-end">
            <div>
              <img
                onClick={functionality}
                src={cross}
                alt=""
                className="cursor-pointer"
              />
            </div>

            <h1 className="font-ave text-base font-normal leading-none text-white">
              Search
            </h1>
          </div>
        </div>

        <div className="logo ">
          <img src={logo} alt="" />
        </div>

        <div className="two flex gap-15">
          <div className="register">
            <h1 className="font-ave text-base font-normal text-white">
              Register / Log In
            </h1>
          </div>
          <div className="cart px-[61px]">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-[#444C40] flex justify-center items-center flex-col py-14 ">
        <div>
          <form action="">
            <div className="flex gap-4">
              <img src={searchicon} alt="" />
              <input
                type="text"
                placeholder="Type here ..."
                className="bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
            </div>
          </form>
        </div>
        <div className="py-20  justify-between items-center ">
          <ul className="font-med text-base font-normal text-white opacity-40 space-y-5">
            <li>Backpacks</li>
            <li>Tote Bags</li>
            <li>Slings</li>
            <li>Leather Bags</li>
            <li>Wallets</li>
            <li>Zip Wallet</li>
          </ul>
        </div>
      </div>
    </nav>
    </main>
  );
}

export default Search;
