import React, { useEffect, useState } from "react";
import cross from "../../assets/SVG/whitecross.svg";
import loginlogo from "../../assets/SVG/login.svg";
import facebook from "../../assets/SVG/facebookwhite.svg";
import google from "../../assets/SVG/whitegoogle.svg";
import { Link } from "react-router";
import Register from "./Register";
import { toggleRegister } from "../../Slices/modalSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(toggleRegister());
    setIsModalOpen(false); // ✅ Close success modal
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page refresh
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    window.dispatchEvent(new Event("userUpdated")); // ✅ Trigger event
    if (!storedUser) {
      alert("No registered user found! Please register first.");
      return;
    }
    if (
      storedUser.email === credentials.email &&
      storedUser.password === credentials.password
    ) {
      localStorage.setItem("user", JSON.stringify(storedUser)); // Set login session
      setIsModalOpen(true); // Show modal instead of alert
    } else {
      alert("Invalid email or password! Please try again.");
    }
  };

  return (
    <>
      <Register functionality={toggleRegister} open={isRegisterOpen} />
      <div className="flex flex-col space-y-12 justify-center items-center max-w-lg lg:w-[500px] mx-auto py-10 lg:py-20  bg-[#444C40]">
        <div className="space-y-12 ">
          <img src={loginlogo} alt="" />
          <h1 className="text-white font-med text-2xl font-semibold">Log In</h1>
        </div>
        <form action="" className="w-full">
          <div className="flex flex-col gap:8 gap-12 w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
            />
          </div>
        </form>

        <div className="flex justify-between w-full gap-8">
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

        <div className="w-full space-y-5 lg:space-y-12">
          <div
            onClick={handleLogin}
            className="flex justify-center py-3 lg:py-5 border rounded-xl cursor-pointer "
          >
            <button className="font-roboto text-base font-medium text-white">
              Log In
            </button>
          </div>
          <div className="flex justify-center">
            <h1 className="font-roboto text-base font-medium text-white ">
              Or
            </h1>
          </div>
          <div className="flex justify-center py-3 lg:py-5 border rounded-xl w-full cursor-pointer">
            <button className="font-roboto text-base font-medium text-white">
              <div className="flex gap-5 ">
                <img src={facebook} alt="" className=" md:size-4" />
                <h1 className="md:text-sm">Login with Facebook</h1>
              </div>
            </button>
          </div>

          <div className="flex justify-center py-3 lg:py-5 border rounded-xl w-full cursor-pointer">
            <button className="font-roboto text-base font-medium text-white">
              <div className="flex gap-5">
                <img src={google} alt="" className=" md:size-4" />
                <h1 className="md:text-sm">Login with Google</h1>
              </div>
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-ave font-bold mb-4">
                Login Successful!
              </h2>
              <p className="text-base font-book font-bold">Welcome back!</p>
              <button
                onClick={handleOk}
                className="mt-4  bg-[#444C40] text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
