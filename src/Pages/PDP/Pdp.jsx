import image1 from "../../assets/Images/Pdpimg.png";
import React, { useState } from "react";
import cart from "../../assets/SVG/whitecart.svg";
import blackarrow from "../../assets/SVG/blackarrow.svg";
import blackdel from "../../assets/SVG/blackdel.svg";
import arrow from "../../assets/SVG/arrow.svg";
import play from "../../assets/SVG/Play.svg";
import product1 from "../../assets/Images/Product 1.png";
import Features from "../../Components/Home/Pdp components/Features";
import Similarproduct from "../../Components/Home/Pdp components/Similarproduct";
import Customerliked from "../../Components/Home/Pdp components/Customerliked";
import { Link } from "react-router";

function Pdp() {
  const circle = [
    { outer: "border-[#444C40]", inner: "bg-[#444C40]" },
    { outer: "border-[#A16B1A]", inner: "bg-[#A16B1A]" },
    { outer: "border-[#254779]", inner: "bg-[#254779]" },
    { outer: "border-[#000000]", inner: "bg-[#000000]" },
  ];

  const sizes = [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (name) => {
    setSelectedSize(name);
  };
  const swipe = [1, 2, 3, 4];

  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-16 py-8 sm:py-16">
      <main>
        <div className="flex flex-col lg:flex-row gap-5 md:gap-24 lg:gap-14 items-center lg:items-start">
          <div className="left w-auto md:w-2/3 flex flex-col items-center ">
            <div>
              <img src={image1} alt="" />
            </div>
            <div className="flex space-x-7  lg:space-x-14 py-5 md:py-10 items-center">
              <div className="rounded-full size-8 lg:size-10 border-2 border-[#444C40] border-opacity-40 flex justify-center items-center">
                <div className="rounded-full size-2 lg:size-3 bg-[#444C40]"></div>
              </div>
              {swipe.map((item, idx) => (
                <div className="rounded-full size-2 lg:size-3 bg-[#DFDFDF]"></div>
              ))}
            </div>
          </div>

          <div className="right w-auto lg:w-1/3 pt-13 md:pt-28 lg:pt-52 space-y-7 md:space-y-14 self-start">
            <div>
              <h1 className="font-med font-semibold text-xl md:text-2xl lg:text-3xl max-w-43 md:max-w-96">
                LIGHTWEIGHT BAG WITH POCKETS
              </h1>
              <h1 className="font-book font-normal text-lg md:text-xl lg:text-3xl text-[#444C40] pt-2 md:pt-5">
                ₹ 3,570.00
              </h1>
              <h1 className="font-med font-semibold text-[9px] lg:text-xs">
                inclusive of all taxes
              </h1>
            </div>
            <div className="space-y-7 lg:space-y-14">
              <div className="font-book text-xs md:text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <div className="colored circle flex space-x-4 md:space-x-8 lg:space-x-12 ">
                {circle.map((item, idx) => (
                  <div
                    className={`flex justify-center items-center green size-4 md:size-8 rounded-full border-2 shrink-0 ${item.outer}`}
                  >
                    <div
                      className={`${item.inner} rounded-full size-2 md:size-3`}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="size flex space-x-4 lg:space-x-12">
                {sizes.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleClick(item.name)}
                    className={`flex group hover:bg-[#444C40] justify-center items-center size-5 md:size-10 shadow-md rounded-md duration-200 transition-colors cursor-pointer ${
                      selectedSize === item.name ? "bg-[#444C40]" : "bg-white"
                    }`}
                  >
                    <h1
                      className={`font-book font-normal text-[9px] md:text-base group-hover:text-white ${
                        selectedSize === item.name ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="cartbutton flex bg-[#444C40] gap-3 md:gap-5 rounded-xl justify-center py-4">
                
                <img src={cart} alt="" />
                <Link to ="/checkout">
                <button className="font-roboto font-medium text-xl lg:text-2xl text-white">
                  ADD TO BAG
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row ">
          <div className="productdetails space-y-6 border-t-2 pt-12 w-auto md:w-3/5 border-[#D1D1D1] border-opacity-30">
            <div>
              <h1 className="font-med font-semibold text-2xl">
                PRODUCT DETAILS
              </h1>
            </div>
            <div className="font-book font-normal text-base text-[#707070] max-w-80">
              <h1>
                Green solid handheld bag, has a zip closure 1 main compartment,
                3 inner pockets <br />
                Tablet sleeve: No <br />
                Two Handles <br /> Warranty: 15 days
              </h1>
              <h1 className="font-book font-normal text-base text-[#707070] max-w-80">
                Warranty provided by brand/manufacturer
              </h1>
            </div>
            <div>
              <div className="">
                <h1 className="font-ave font-semibold text-base max-w-80">
                  Size & Fit
                </h1>
                <h1 className="font-ave font-normal text-base text-[#707070] max-w-80">
                  Height: 32 cm <br />
                  Width: 34 cm <br />
                  Depth: 8 cm
                </h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className="font-ave font-semibold text-base">
                  Material & Care
                </h1>
                <h1 className="font-ave font-normal text-base text-[#707070]">
                  PU <br />
                  Wipe with a clean, dry cloth to remove dust
                </h1>
              </div>
            </div>
            <div className="flex gap-1 pl-">
              <img src={blackarrow} alt="" />
              <h1 className="font-ave font-semibold text-base ">
                Specification
              </h1>
            </div>
          </div>
          <div className="deliveryoptions py-10 lg:py-24 ">
            <div className="font-med font-semibold text-2xl flex gap-4 py-8">
              <h1>DELIVERY OPTIONS</h1>
              <img src={blackdel} alt="" />
            </div>
            <div className="bg-white flex justify-between w-[250px] md:w-[350px] px-3 py-2  text-sm rounded-lg items-center border-2">
              <div>
                <input type="text" id="number"  className="focus:outline-none" />
              </div>
              <div className="bg-[#444C40] rounded-lg ">
                <img src={arrow} alt="" className="px-2 md:px-4 py-2 md:py-3" />
              </div>
            </div>
            <div>
              <h1 className="font-book text-xs font-normal text-[#707070] py-2">
                Please enter PIN code to check delivery time Cash / Card on
                Delivery Availability
              </h1>
            </div>
            <div>
              <h1 className="font-book text-base font-normal text-[#707070] py-12 max-w-80">
                100% Original Products <br />
                Free Delivery on order above Rs. 1199 <br />
                Cash on delivery might be available <br /> Easy 30 days returns
                and exchanges <br />
                Try & Buy might be available
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row md:items-center">
          <div className="">
            <h1 className="font-comme text-3xl md:text-5xl lg:text-7xl xl:text-[100px] font-extralight text-[#444C40] text-center md:text-start ">
              Delight in the <br />
              Details
            </h1>
          </div>

          <div className="py-10 md:py-0">
            <div className="relative md:shrink-0  top-0 md:-top-16 lg:-top-28">
              <img
                src={product1}
                alt=""
                className="rounded-full mx-auto md:mx-0 size-[250px] lg:size-[350px] xl:size-[502px]"
              />
              <div className="bg-black bg-opacity-40 absolute inset-0  md:w-full md:h-full rounded-full mx-auto md:mx-0 size-[250px] lg:size-[350px] xl:size-[502px] "></div>
              <div className="absolute z-40 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer">
                <img src={play} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Features />
      <Similarproduct />
      <Customerliked />
    </div>

    // <Features/>
  );
}

export default Pdp;
