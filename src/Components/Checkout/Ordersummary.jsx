import React from "react";
import { useSelector } from "react-redux";

function Ordersummary() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="shadow-[0px_0px_26px_5px_rgba(0,_0,_0,_0.1)]  rounded-xl inline-block overflow-hidden">
      <main className="pt-8 px-6 md:px-12 ">
        <div className="">
          <h1 className="font-med text-2xl font-semibold text-[#444C40]  border-b-2 border-[#E7E7E7] pb-5">
            Order summary
          </h1>
        </div>

        <div className="w-full flex flex-col space-y-4 pt-12">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b-2 border-[#E7E7E7] pb-5"
              >
                <h1 className="font-book text-sm lg:text-base font-normal text-[#444C40]">
                  {item.quantity} x {item.name},{item.color}
                </h1>
                <h1 className="font-med font-semibold text-[#444C40] text-sm md:text-base whitespace-nowrap">
                  ₹{" "}
                  {(
                    parseFloat(item.discountedPrice.replace(/,/g, "")) *
                    item.quantity
                  ).toLocaleString("en-IN")}
                </h1>
              </div>
            ))
          ) : (
            <div className="py-4">
              <h1 className="font-book text-sm lg:text-base text-[#444C40]">
                Your cart is empty.
              </h1>
            </div>
          )}

          <div className="flex justify-between font-med text-base font-normal text-[#444C40]">
            <h1>Subtotal</h1>
            <h1 className="">₹ {totalAmount.toLocaleString("en-IN")}</h1>
          </div>
        </div>
        <div className="flex justify-between pt-4 ">
          <div className="flex flex-col text-[#444C40] font-book font-normal">
            <h1 className="text-base">Shipping</h1>
            <h1 className="text-xs">Regular shipping (2-3 days)</h1>
          </div>
          <div className="text-base font-semibold font-med text-[#444C40] ">
            <h1>Free</h1>
          </div>
        </div>
      </main>
      <div className="bg-[#444C40] flex justify-between px-12 mt-16 hover:brightness-125 duration-500 transition-all">
        <div className="text-white font-med text-base font-semibold py-5 ">
          <h1>ORDER TOTAL</h1>
        </div>
        <div className="text-white font-med text-base font-semibold py-5">
        <h1>₹ {totalAmount.toLocaleString("en-IN")}</h1>
        </div>
      </div>
    </div>
  );
}

export default Ordersummary;
