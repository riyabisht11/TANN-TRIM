import React from "react";
import product from "../../../assets/Images/similarbags.png";
import arrow from "../../../assets/SVG/arrow.svg"

function Similarproduct() {
  const Similarproduct = [1, 2, 3, 4];
  return (
    <div className="max-w-screen-2xl mx-auto pt-[70px] md:pt-[140px]">
      <div className="">
        <h1 className="font-med text-2xl font-semibold">SIMILAR PRODUCTS</h1>
      </div>
      <div className="flex overflow-x-auto gap-14 md:gap-32 pt-10 items-center">
        {Similarproduct.map(() => (
          <div className="card w-52 md:w-auto  shrink-0 pt-10 border rounded-xl border-[#D1D1D1] inline-block shadow-md ">
            <div>
              <img src={product} alt="" />
            </div>
            <div className="text-black space-y-2  py-4 px-3 rounded-b-xl border-t-2 border-[#D1D1D1] ">
              <div>
                <h1 className="font-med text-base md:text-xs font-semibold">
                  Lightweight Bag
                </h1>
              </div>
              <div>
                <h1 className="font-book text-xs font-normal">
                  Black Quilted Satchel Bag
                </h1>
              </div>
              <div className="flex flex-col md:flex-row gap-2 font-ave font-normal text-base ">
                <h1 className="font-semibold text-xs">₹ 3,570.00</h1>
                <h1 className="opacity-30 line-through text-[9px]">
                  ₹ 6,570.00
                </h1>
                <h1 className="text-[#FF4242] text-[9px]">(40% OFF)</h1>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-[#444C40] rounded-lg size-10 ">
          <img src={arrow} alt="" className="px-4 py-3" />
        </div>
      </div>
    </div>
  );
}

export default Similarproduct;
