import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // ✅ Import useDispatch
// ✅ Import Redux actions
import Revieworder from "../../Components/Checkout/Revieworder";
import Paymentmethod from "../../Components/Checkout/Paymentmethod";
import Deliveryadd from "../../Components/Checkout/Deliveryadd";
import Ordersummary from "../../Components/Checkout/Ordersummary";
import CheckoutNav from "../../Components/Checkout/CheckoutNav";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import {
  closeRegister,
  openRegister,
  toggleRegister,
} from "../../Slices/modalSlice";
import Register from "../Home/Register";

function Checkout() {
  const dispatch = useDispatch(); // ✅ Initialize dispatch
  const navigate = useNavigate();
  const isRegisterOpen = useSelector((state) => state.modal.isRegisterOpen); // ✅ Get Redux state
  console.log("initial state " + isRegisterOpen);

  const handleRegister = () => {
    dispatch(toggleRegister());
    console.log("handleRegister function " + isRegisterOpen);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      // dispatch(openRegister()); // ✅ Open Register Popup if user is NOT logged in
    } else {
      setUser(storedUser);
    }
  }, [isRegisterOpen]);

  useEffect(() => {
    if (isRegisterOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isRegisterOpen]);

  return (
    <>
      <CheckoutNav />
      <Register functionality={handleRegister} open={isRegisterOpen} />
      {/* ✅ Login/Register Popup */}
      {console.log(user)}
      {!user && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100] ">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4 text-[#444C40]">
              Log in/Register to Continue Purchase
            </h2>
            <button
              onClick={() => dispatch(toggleRegister())} // ✅ Opens Register Page
              className="bg-[#444C40] text-white px-4 py-2 rounded-lg hover:brightness-110"
            >
              Log in / Register
            </button>
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto px-5 sm:px-16">
        <div className="flex justify-center py-12">
          <h1 className="text-3xl font-semibold text-[#444C40] font-med">
            Secure Checkout
          </h1>
        </div>

        <div className="flex justify-between gap-16 flex-col lg:flex-row pb-20">
          <div className="left w-auto lg:w-2/5 flex flex-col gap-16">
            <Revieworder />
            <Deliveryadd />
          </div>
          <div className="w-auto lg:w-3/5 right flex flex-col gap-16">
            <Paymentmethod />
            <Ordersummary />

            <button
              onClick={() =>
                user ? navigate("/orderplaced") : dispatch(openRegister())
              }
              className="bg-[#444C40] flex justify-center rounded-xl mb-5 hover:brightness-125 duration-500 transition-all text-white text-lg py-4 w-full"
            >
              COMPLETE ORDER
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
