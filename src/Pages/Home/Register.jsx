import React, { useState } from "react";
import cross from "../../assets/SVG/whitecross.svg";
import register from "../../assets/SVG/Registerbutton.svg";

import loginlogo from "../../assets/SVG/login.svg";
import facebook from "../../assets/SVG/facebookwhite.svg";
import google from "../../assets/SVG/whitegoogle.svg";
import Login from "./Login";

function Register({ functionality, open }) {
  const [showRegister, setshowRegister] = useState(true);

  const [user, setUser] = useState({ name: "", email: "", phone: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!user.name || !user.email || !user.phone || !user.password) {
      alert("All fields are required!");
      return;
    }

    // Store user data in localStorage
    localStorage.setItem("registeredUser", JSON.stringify(user));
    setShowPopup(true);
    // Switch to login form
    setUser({ name: "", email: "", phone: "", password: "" });

    setshowRegister(false); 
  
  };

 

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
              showRegister ? "opacity-100" : "opacity-40 hover:scale-110"
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
        <div className="flex flex-col space-y-12 justify-center items-center max-w-lg lg:w-[500px] mx-auto py-10  md:absolute md:left-1/2 md:-translate-x-1/2  md:top-2 lg:top-1/2 lg:-translate-y-1/2">
          <div className="space-y-12 ">
            <img src={register} alt="" />
            <h1 className="text-white font-med text-2xl font-semibold">
              Register
            </h1>
          </div>
         <form action="" className="w-full">
            <div className="flex flex-col gap-8 lg:gap-12 w-full justify-center">
              <input
               name="name"
                type="text"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
              <input
               name="email"
                type="Email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email Id"
                className=" text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
              <input
                type="tel"
                 name="phone"
                placeholder="Phone Number "
                value={user.phone}
                  onChange={handleChange}
                className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
              />
            </div>
          </form>

          <div  onClick={handleRegister} className="flex justify-center py-5 border rounded-xl w-full cursor-pointer ">
            <button className="font-roboto text-base font-medium text-white">
              Register
            </button>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>

    {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[1000]">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-xl font-semibold text-gray-900">Registration Successful!</h2>
            <p className="text-gray-700 mt-2">Please log in to continue.</p>
            <button
              onClick={() => {
                setShowPopup(false);
                setShowRegister(false);
              }}
              className="mt-4 bg-[#444C40] text-white px-4 py-2 rounded-lg hover:bg-[#444C40]"
            >
              OK
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

export default Register;
