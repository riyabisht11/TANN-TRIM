import React, { useState } from "react";
import logo from "../../assets/SVG/whitelogo.svg";
import cart from "../../assets/SVG/whitecart.svg";
import cross from "../../assets/SVG/whitecross.svg";
import searchicon from "../../assets/SVG/searchicon.svg";


function Menu({ functionality, open }) {
    const [showMenu, setshowMenu] = useState(true);
  return (
    <main className={`bg-[#444C40] h-screen w-full  ${
        open ? "translate-y-0" : "-translate-y-full"
      } absolute inset-0 overflow-hidden z-[999]   transform transition-transform duration-300 ease-in-out`}>
    <nav
      className={` max-w-screen-2xl mx-auto py-6 px-5 md:px-16 bg-[#444C40] shadow-md h-full`}
    >
      <div className="navcontent flex justify-between ">
        <div className="one flex gap-15 items-end">
          <div className="menu flex gap-6 pr-24 items-end">
            <div onClick={functionality} className="cursor-pointer">
              <img src={cross} alt="" className="mb-1" />
            </div>

            <h1 className="font-ave text-base font-normal leading-none text-white">
              Menu
            </h1>
          </div>
          <div className="search flex gap-5 items-end">
            <div>
              <img src={searchicon} alt="" className="cursor-pointer" />
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

      <div className="flex justify-between py-20">
        <div>
          <ul className="text-white font-med font-semibold text-2xl space-y-6">
            <li>Bags</li>
            <li className="opacity-40">Jewelry</li>
            <li className="opacity-40">Travel</li>
            <li className="opacity-40">Gifting</li>
          </ul>
          <h1 className="text-white text-base font-med font-semibold pt-20">
            Track
          </h1>
        </div>

        <div>
          <ul className="space-y-9">
            <div className="flex gap-5">
              <li className="font-med text-base text-white opacity-40">
                Backpacks
              </li>
              <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                NEW
              </button>
            </div>

            <li className="font-med text-base text-white opacity-40">
              Tote Bags
            </li>

            <div className="flex gap-5">
              <li className="font-med text-base text-white opacity-40">
                Slings
              </li>
              <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                NEW
              </button>
            </div>

            <li className="font-med text-base text-white opacity-40">
              Leather Bags
            </li>

            <li className="font-med text-base text-white opacity-40">
              Wallets
            </li>

            <div className="flex gap-5">
              <li className="font-med text-base text-white opacity-40">
                Zip Wallet
              </li>
              <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                NEW
              </button>
            </div>
          </ul>
        </div>

        <div>
          <ul className="space-y-6">
            <li className="font-med text-base text-white opacity-40">Passport Holder</li>

            <div className="flex gap-5">
              <li className="font-med text-base text-white opacity-40">
              Phone and Laptop Covers
              </li>
              <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                NEW
              </button>
            </div>

            <li className="font-med text-base text-white opacity-40">Pouches</li>

            <div className="flex gap-5">
              <li className="font-med text-base text-white opacity-40">
              Clearance Sale
              </li>
              <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
              %
              </button>
            </div>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
    </main>
  );
}

export default Menu;
