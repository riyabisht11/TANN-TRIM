import React, { useState } from "react";
import cartproduct from "../../assets/SVG/cartproduct.svg";
import whitecross from "../../assets/SVG/whitecross.svg";
import minus from "../../assets/SVG/minus.svg";
import one from "../../assets/SVG/1.svg";
import add from "../../assets/SVG/increase.svg";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../Slices/cartSlice";

function Revieworder() {
  const dispatch =useDispatch();
  const cartItems = useSelector((state)=>state.cart.cartItems);
  const totalQuantity=useSelector((state)=>state.cart.totalQuantity);
  const totalAmount=useSelector((state)=>state.cart.totalAmount);
  return (
    <div className="shadow-[0px_0px_26px_5px_rgba(0,_0,_0,_0.1)]  rounded-xl inline-block  overflow-hidden space-y-10 mx">
      <main className="pt-8 px-6 md:px-12 card inline-flex flex-col space-y-12 w-full">
        <div className="">
          <h1 className="font-med text-base md:text-xl  xl:text-2xl font-semibold text-[#444C40]  border-b-2 border-[#E7E7E7] pb-3 md:pb-5">
            1. Review your order ({totalQuantity} Items)
          </h1>
        </div>
        <main className="space-y-7">
          {cartItems.map((item, idx) => (
            <div key={item.id} className="item flex flex-col xl:flex-row shadow-[0px_0px_15px_5px_rgba(0,_0,_0,_0.1)] p-2 md:p-3 rounded-xl relative  items-center xl:items-start">
              <div>
                <img src={cartproduct} alt="" />
              </div>
              <div className="pr-6 space-y-6">
                <div className="font-book text-[#444C40]">
                  <h1 className="font-normal text-base">
                    {item.name}
                  </h1>
                  <h1 className="font-light text-xs">Color : {item.color}</h1>
                  <h1 className="font-light text-xs">Finish: {item.finish}</h1>
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <div onClick={() => dispatch(decreaseQuantity(item.id))} className="decrease rounded-full size-6 bg-[#444C40] flex justify-center items-center">
                      <img src={minus} alt="" className="" />
                    </div>
                    <div className="quantity rounded-sm size-6 border border-[#444C40] border-opacity-20 flex justify-center items-center">
                    <span>{item.quantity}</span>
                    </div>
                    <div onClick={() => dispatch(increaseQuantity(item.id))} className="increase rounded-full size-6 bg-[#444C40] flex justify-center items-center">
                      <img src={add} alt="" />
                    </div>
                  </div>

                  <div className="relative left-5 whitespace-nowrap">
                    <h1 className=" font-ave text-[#444C40] text-base font-semibold">
                      ₹ {parseFloat(item.discountedPrice.replace(/[^\d.]/g, "")) * item.quantity}
                    </h1>
                  </div>
                </div>
              </div>

              <div  onClick={() => dispatch(removeFromCart(item.id))} className="rounded-full size-5 bg-[#444C40] flex justify-center items-center absolute right-1 top-1">
                <img src={whitecross} alt="" className="size-4 " />
              </div>
            </div>
          ))}
        </main>
        <div className="flex space-x-16 self-end">
          <h1 className="font-med text-[#444C40] text-base font-semibold">
            Subtotal
          </h1>
          <h1 className="font-med text-[#444C40] text-base font-normal">
          ₹ {totalAmount.toFixed(2)}
          </h1>
        </div>
      </main>
      <div className="bg-[#444C40] flex justify-center hover:brightness-125 duration-500 transition-all ">
        <button className="text-white font-med text-base font-semibold py-5 ">
          CONTINUE TO DELIVERY ADDRESS
        </button>
      </div>
    </div>
  );
}

export default Revieworder;
