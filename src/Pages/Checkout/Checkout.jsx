import React, { useEffect, useState } from "react";
import Revieworder from "../../Components/Checkout/Revieworder";
import Paymentmethod from "../../Components/Checkout/Paymentmethod";
import Deliveryadd from "../../Components/Checkout/Deliveryadd";
import Ordersummary from "../../Components/Checkout/Ordersummary";
import CheckoutNav from "../../Components/Checkout/CheckoutNav";
import Footer from "../../Layout/Footer";
import { Link, useNavigate } from "react-router";

function Checkout() {
  return (
    <>
      <CheckoutNav />
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-16">
        <div className="flex  justify-center py-12">
          <h1 className="text-3xl font-semibold text-[#444C40] font-med">
            Secure Checkout
          </h1>
        </div>
        <div className="flex justify-between gap-16 flex-col lg:flex-row pb-20">
          <div className="left w-auto lg:w-2/5 flex flex-col gap-16">
            <Revieworder />
            <Deliveryadd />
          </div>
          <div className=" w-auto lg:w-3/5 right  flex flex-col gap-16">
            <Paymentmethod />
            <Ordersummary />

            <Link to="/orderplaced">
              <div className="bg-[#444C40] flex justify-center rounded-xl mb-5 hover:brightness-125 duration-500 transition-all">
                <button className="text-white font-roboto text-lg md:text-xl font-normal py-4 ">
                  COMPLETE ORDER
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
