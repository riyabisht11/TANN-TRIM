import React from "react";
import arrow from "../../assets/SVG/whitearrow.svg";
import loading from "../../assets/SVG/loadingsign.svg";
import { Link } from "react-router";

function Forgotpassword() {
    
  return (
    <main className="bg-[#444C40] w-full h-full">
    <div className="max-w-screen-2xl mx-auto px-16 py-16 bg-[#444C40] h-screen relative flex  justify-center items-center">
      
      <div className="absolute left-5 md:left-16  top-8 md:top-16">
        <Link to ="/">
        <img src={arrow} alt="" />
        </Link>
      </div>

      <div className=" w-[490px] flex flex-col justify-between items-center space-y-12">
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
              className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold w-full"
            />
          </div>
          </form>

          <div className="flex justify-center py-5 border rounded-xl w-full">
            <Link to ="/forgotlink">
            <button className="font-roboto text-base font-medium text-white">
              Done
            </button>
            </Link>
          </div>
        </div>
      </div>
      </main>
    
  );
}

export default Forgotpassword;
