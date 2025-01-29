import React from "react";
import arrow from "../../assets/SVG/whitearrow.svg";
import loading from "../../assets/SVG/loadingsign.svg";

function Forgotpassword() {
    
  return (
    <div className="max-w-screen-2xl mx-auto px-16 py-16 bg-[#444C40] ">
      <div>
        <img src={arrow} alt="" />
      </div>

      <div className=" max-w-lg mx-auto flex flex-col justify-between items-center space-y-12">
        <div>
          <img src={loading} alt="" />
        </div>
        <div>
          <h1 className="font-med text-white text-2xl font-semibold">
            Forgot password?
          </h1>
        </div>

        <form action="" className="w-full">
          <div className=" w-full">
            <input
              type="Email"
              placeholder="Email Id"
              className="bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold w-full"
            />
          </div>
          </form>

          <div className="flex justify-center py-5 border rounded-xl w-full">
            <button className="font-roboto text-base font-medium text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default Forgotpassword;
