import React, { useState } from "react";
import cartproduct from "../../assets/SVG/cartproduct.svg";
import blackcross from "../../assets/SVG/blackcross.svg";
import minus from "../../assets/SVG/minus.svg";
import one from "../../assets/SVG/1.svg";
import add from "../../assets/SVG/increase.svg";
import whitecross from "../../assets/SVG/whitecross.svg";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../Slices/cartSlice";



function Cart({ functionality, open }) {
  const cart = [1, 2];
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalAmount=useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  

  return (
    <div className=" min-h-screen mx-auto fixed backdrop-blur-sm inset-0 w-full z-[999] max-w-screen-2xl px-16">
    <div
      className={`shadow-[0px_0px_26px_5px_rgba(0,_0,_0,_0.1)] flex flex-col justify-between rounded-xl max-w-lg h-[80vh] md:h-[656px] overflow-y-auto xl:overflow-hidden space-y-10 fixed right-0 lg:right-16 lg:top-20 z-[999] bg-white`}
    >
      <main className="pt-8 px-6 md:px-12 card inline-flex flex-col space-y-8 lg:space-y-12">
        <div className="flex border-b-2 border-[#E7E7E7] pb-3 md:pb-5 space-x-16 sticky top-0 bg-white z-10">
          <h1 className="font-med text-sm md:text-xl xl:text-2xl font-semibold text-[#444C40] whitespace-nowrap">
            Your Shopping Bag ({totalQuantity} Items)
          </h1>
          <img
            className="cursor-pointer"
            onClick={functionality}
            src={blackcross}
            alt=""
          />
        </div>

        {/* Show this when the cart is empty */}
        {cartItems.length === 0 ? (
          <div className="flex ">
          <div className="flex flex-col items-center justify-center  pt-28 space-y-5">
            <h2 className="font-book text-3xl font-semibold text-gray-600">
              Your Tanntrim Cart is Empty.
            </h2>
            <Link
              to="/plp"
              onClick={functionality}
              className="font-book bg-[#444C40] text-white px-6 py-2 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
          </div>
        ) : (
          <main className="space-y-5 lg:space-y-7 flex-grow max-h-[300px] overflow-y-auto">
            {cartItems.map((item, idx) => (
              <div key={item.id} className="item flex flex-col xl:flex-row border p-2 md:p-3 rounded-xl relative items-center xl:items-start">
                <div>
                  <img src={cartproduct} alt="" />
                </div>
                <div className="pr-6 space-y-6">
                  <div className="font-book text-[#444C40]">
                    <h1 className="font-normal text-sm lg:text-base">
                      {item.name}
                    </h1>
                    <h1 className="font-light text-xs">Color: {item.color}</h1>
                    <h1 className="font-light text-xs">Finish: {item.finish}</h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex space-x-3">
                      <div   onClick={() => dispatch(decreaseQuantity(item.id))} className="decrease rounded-full size-6 bg-[#444C40] flex justify-center items-center cursor-pointer">
                        <img src={minus} alt="" />
                      </div>
                      <div className="quantity rounded-sm size-6 border border-[#444C40] border-opacity-20 flex justify-center items-center">
                        <h1 className="font-light text-xs">{item.quantity}</h1>
                      </div>
                      <div   onClick={() => dispatch(increaseQuantity(item.id))} className="increase rounded-full size-6 bg-[#444C40] flex justify-center items-center cursor-pointer">
                        <img src={add} alt="" />
                      </div>
                    </div>
                    <div className="relative left-12 whitespace-nowrap">
                      <h1 className="font-ave text-[#444C40] text-base font-semibold">
                        ₹ {item.discountedPrice}
                      </h1>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="rounded-full size-5 bg-[#444C40] flex justify-center items-center absolute right-1 top-1 cursor-pointer"
                >
                  <img src={whitecross} alt="" className="size-4 " />
                </div>
              </div>
            ))}
          </main>
        )}

        {/* Footer Section */}
        {cartItems.length > 0 && (
          <div className="flex self-end">
            <div className="flex flex-col space-y-2 font-med text-xs lg:text-base text-[#444C40] border-r-2 pr-8">
              <h1>Amount</h1>
              <h1>Shipping</h1>
              <h1>Subtotal</h1>
            </div>
            <div className="flex flex-col space-y-2 font-med text-xs lg:text-base text-[#444C40] pl-8">
              <h1>₹ {totalAmount}.00</h1>
              <h1>Free</h1>
              <h1>₹ {totalAmount}.00</h1>
            </div>
          </div>
        )}
      </main>

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="bg-[#444C40] flex justify-center sticky bottom-0">
          <Link
            to="/checkout"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="text-white font-med text-base py-4"
          >
            CONTINUE WITH PURCHASE
          </Link>
        </div>
      )}
    </div>
  </div>
);
}

export default Cart;
