import React from "react";
import cross from "../../assets/SVG/whitecross.svg";
import loginlogo from "../../assets/SVG/login.svg";
import facebook from "../../assets/SVG/facebookwhite.svg";
import google from "../../assets/SVG/whitegoogle.svg";
import { Link } from "react-router";

function Login() {
  return (
    <div className="flex flex-col space-y-12 justify-center items-center max-w-lg mx-auto py-10 bg-[#444C40]">
      <div className="space-y-12 ">
        <img src={loginlogo} alt="" />
        <h1 className="text-white font-med text-2xl font-semibold">Log In</h1>
      </div>
      <form action="" className="w-full">
        <div className="flex flex-col gap:8 gap-12 w-full">
          <input
            type="text"
            placeholder="Full Name"
            className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
          />
        </div>
      </form>

      <div className="flex justify-between w-full">
        <div className="flex gap-1 items-center">

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-white opacity-40"
            />
            <span className="font-med font-semibold text-xs lg:text-base text-white opacity-40">
              Remember me
            </span>
          </label>
        </div>
        <div>
          <Link to="/forgotpassword">
            <h1 className="font-med font-semibold text-xs lg:text-base text-white">
              Forgot Password?
            </h1>
          </Link>
        </div>
      </div>

      <div className="w-full space-y-10 lg:space-y-12">
        <div className="flex justify-center py-3 lg:py-5 border rounded-xl cursor-pointer ">
          <button className="font-roboto text-base font-medium text-white">
            Log In
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="font-roboto text-base font-medium text-white ">Or</h1>
        </div>
        <div className="flex justify-center py-3 lg:py-5 border rounded-xl w-full cursor-pointer">
          <button className="font-roboto text-base font-medium text-white">
            <div className="flex gap-5 ">
              <img src={facebook} alt="" />
              <h1>Login with Facebook</h1>
            </div>
          </button>
        </div>

        <div className="flex justify-center py-3 lg:py-5 border rounded-xl w-full cursor-pointer">
          <button className="font-roboto text-base font-medium text-white">
            <div className="flex gap-5">
              <img src={google} alt="" />
              <h1>Login with Google</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
