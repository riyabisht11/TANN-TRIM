import React from "react";
import bg from "../../assets/Images/herobg.jpg";
import { Link } from "react-router";
import bgvideo from "../../assets/Videos/bagvideo.mp4"


function Hero() {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={bg}
        className="absolute inset-0 w-full h-full z-0 object-center object-cover rounded-b-2xl" 
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full bg-black/40 absolute inset-0"></div>

      <div className="herosec max-w-screen-2xl mx-auto relative py-5 px-5 md:px-16 h-screen overflow-hidden flex items-center justify-end ">
        <div className="relative z-30  ">
          <div>
            <h1 className="font-med text-2xl font-semibold text-white">
            Shoulder Bag
            </h1>
          </div>
          <div className="pt-5 max-w-[300px]">
            <p className="font-book text-base font-normal text-white">
            Elevate your everyday look with our sleek and stylish shoulder bag, the perfect companion for work, travel, and casual outings.
            </p>
          </div>
          <div className="pt-10 ">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              to="/plp"
            >
                 <button className="relative text-white font-semibold py-3 lg:py-3 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base overflow-hidden justify-center group">
                    {/* Background animation */}
                    <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                    {/* Text content */}
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      SHOP NOW
                    </span>
                  </button>

              {/* <button className="font-med text-white text-base font-semibold transition-all duration-700 hover:text-black">
                SHOP NOW
              </button> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
