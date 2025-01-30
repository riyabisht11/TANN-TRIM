import React, { useState } from "react";
import cartproduct from "../../assets/SVG/cartproduct.svg";
import blackcross from "../../assets/SVG/blackcross.svg";
import minus from "../../assets/SVG/minus.svg";
import one from "../../assets/SVG/1.svg";
import add from "../../assets/SVG/increase.svg";
import whitecross from "../../assets/SVG/whitecross.svg";
import { Link } from "react-router";

function Cart({ functionality, open }) {
  const cart = [1, 2];
  return (
    <div className="min-h-screen mx-auto fixed backdrop-blur-sm inset-0 w-full z-[999] max-w-screen-2xl px-16">
      <div
        className={`${
          open ? "" : ""
        }  shadow-[0px_0px_26px_5px_rgba(0,_0,_0,_0.1)] flex flex-col justify-between rounded-xl max-w-lg h-[80vh]  md:h-[656px]  overflow-y-auto xl:overflow-hidden space-y-10  fixed right-0 lg:right-16 lg:top-20  z-[999] bg-white `}
      >
        <main className="pt-8 px-6 md:px-12 card inline-flex flex-col space-y-8 lg:space-y-12 ">
          <div className=" flex border-b-2 border-[#E7E7E7] pb-3 md:pb-5 space-x-16">
            <h1 className="font-med text-sm md:text-xl  xl:text-2xl font-semibold text-[#444C40]  whitespace-nowrap">
              Your Shopping Bag (2 Items)
            </h1>
            <img
              className="cursor-pointer"
              onClick={functionality}
              src={blackcross}
              alt=""
            />
          </div>
          <main className="space-y-5 lg:space-y-7">
            {cart.map((item, idx) => (
              <div className="item flex flex-col xl:flex-row shadow-[0px_0px_15px_5px_rgba(0,_0,_0,_0.1)] p-2 md:p-3 rounded-xl relative  items-center xl:items-start">
                <div>
                  <img src={cartproduct} alt="" />
                </div>
                <div className="pr-6 space-y-6">
                  <div className="font-book text-[#444C40]">
                    <h1 className="font-normal text-sm lg:text-base">
                      Lightweight Bag with Pockets
                    </h1>
                    <h1 className="font-light text-xs">Color : Olive Green</h1>
                    <h1 className="font-light text-xs">Finish: leather</h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex space-x-3">
                      <div className="decrease rounded-full size-6 bg-[#444C40] flex justify-center items-center">
                        <img src={minus} alt="" className="" />
                      </div>
                      <div className="quantity rounded-sm size-6 border border-[#444C40] border-opacity-20 flex justify-center items-center">
                        <img src={one} alt="" />
                      </div>
                      <div className="increase rounded-full size-6 bg-[#444C40] flex justify-center items-center">
                        <img src={add} alt="" />
                      </div>
                    </div>

                    <div className="relative left-5 whitespace-nowrap">
                      <h1 className=" font-ave text-[#444C40] text-base font-semibold">
                        ₹ 3,570.00
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="rounded-full size-5 bg-[#444C40] flex justify-center items-center absolute right-1 top-1">
                  <img src={whitecross} alt="" className="size-4 " />
                </div>
              </div>
            ))}
          </main>
          <div className="flex  self-end ">
            {/* <h1 className="font-med text-[#444C40] text-base font-semibold">
            Subtotal
          </h1>
          <h1 className="font-med text-[#444C40] text-base font-normal">
            ₹ 7,140.00
          </h1> */}
            <div className=" flex flex-col space-y-2 font-med text-xs lg:text-base font-semibold text-[#444C40] border-r-2 pr-8">
              <h1>Item</h1>
              <h1>Shipping</h1>
              <h1>Subtotal</h1>
            </div>

            <div className="flex flex-col space-y-2 font-med text-xs lg:text-base font-semibold text-[#444C40] pl-8">
              <h1>₹ 7,140.00</h1>
              <h1>Free</h1>
              <h1>₹ 7,140.00</h1>
            </div>
          </div>
        </main>
        <div className="bg-[#444C40] flex justify-center ">
          <Link
            to="/checkout"
            className="text-white font-med text-base font-semibold py-5 "
          >
            CONTINUE WITH PURCHASE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
