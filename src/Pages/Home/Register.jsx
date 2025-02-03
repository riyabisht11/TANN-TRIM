import React, { useState } from "react";
import cross from "../../assets/SVG/whitecross.svg";
import register from "../../assets/SVG/Registerbutton.svg";

import loginlogo from "../../assets/SVG/login.svg";
import facebook from "../../assets/SVG/facebookwhite.svg";
import google from "../../assets/SVG/whitegoogle.svg";
import Login from "./Login";

function Register({ functionality, open }) {
  const [showRegister, setshowRegister] = useState(true);


  return (
    <main className={`bg-[#444C40] h-screen w-full ${
      open ? "translate-x-0" : "translate-x-full"
    } fixed inset-0 z-[999] transform transition-transform duration-300 ease-in-out overflow-x-hidden `}>
    <div
      className={` max-w-screen-2xl mx-auto  bg-[#444C40] px-16 py-8 relative h-full `}
    >
      <div className="flex flex-col relative lg:absolute lg:left-16 ">
        <div onClick={functionality} className="cursor-pointer">
          <img src={cross} alt="" />
        </div>
        <div className="flex flex-col gap-5 md:py-16 lg:py-24 items-center md:items-start justify-center md:justify-start">
          <button
            onClick={() => setshowRegister(true)}
            className={`font-med font-semibold text-xl lg:text-2xl hover:opacity-100 text-white transition-opacity duration-300 ease-linear ${
              showRegister ? "opacity-100" : "opacity-40 "
            }`}
          >
            Register
          </button>
          <button
            onClick={() => {
              console.log("click");
              setshowRegister(false);
            }}
            className={`font-med font-semibold text-xl lg:text-2xl hover:opacity-100 text-white transition-opacity duration-300 ease-linear ${
              showRegister ? "opacity-40 " : "opacity-100 "
            } `}
          >
            Log In
          </button>
        </div>
      </div>
      {showRegister ? (
        <div className="flex flex-col space-y-12 justify-center items-center max-w-lg mx-auto py-10">
          <div className="space-y-12 ">
            <img src={register} alt="" />
            <h1 className="text-white font-med text-2xl font-semibold">
              Register
            </h1>
          </div>
          <form action="" className="w-full">
            <div className="flex flex-col gap-12 w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
              <input
                type="Email"
                placeholder="Email Id"
                className=" text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Phone Number "
                className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
              <input
                type="password"
                placeholder="Password"
                className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
            </div>
          </form>

          <div className="flex justify-center py-5 border rounded-xl w-full ">
            <button className="font-roboto text-base font-medium text-white">
              Register
            </button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
    </main>
  );
}

export default Register;
