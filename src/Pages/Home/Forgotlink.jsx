import React from "react";
import linksent from "../../assets/SVG/linksent.svg";
import { Link } from "react-router";

function Forgotlink() {
  return (
   <main className="bg-[#444C40] w-full h-full">
      <div className="max-w-screen-2xl mx-auto px-16 py-16 bg-[#444C40] h-screen flex flex-col justify-center items-center">
        <div className=" max-w-lg mx-auto  space-y-12">
          <div className="flex justify-center">
            <img src={linksent} alt="" />
          </div>
          <div>
            <h1 className="font-med text-white text-xs md:text-base font-semibold whitespace-nowrap">
            A link has been sent to your registered Email Id
            </h1>
          </div>
          
          <div className="flex justify-center py-5 rounded-xl w-full relative bg-white/5">
          <Link to ="/">
            <button className="font-roboto text-base font-medium text-white  z-50 opacity-100">
            Back to Home
            </button>
            </Link>
          </div>
          
        </div>
      </div>
      </main>

  );
}

export default Forgotlink;
