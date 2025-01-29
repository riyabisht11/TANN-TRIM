import React from "react";
import bg from "../../assets/Images/background.png";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="herosec max-w-screen-2xl mx-auto relative py-5 px-5 md:px-16 h-screen overflow-hidden flex items-center justify-end">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full z-0 object-cover" />

      <div className="relative z-30  ">
        <div>
          <h1 className="font-ave text-2xl font-semibold text-white">Lorem ipsum</h1>
        </div>
        <div className="pt-5">
          <p className="font-ave text-base font-normal text-white">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit</p>
        </div>
        <div className="pt-16 ">
          <Link onClick={()=> window.scrollTo({top:0 , behavior:"instant"})} to="/plp"> 
          <button className="font-ave text-white text-base font-semibold">SHOP NOW</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
