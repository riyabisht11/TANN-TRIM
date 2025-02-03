import React, { useState } from "react";
import bag from "../../assets/Images/Bag.png";
import jwell from "../../assets/Images/Jwellery.png";
import travel from "../../assets/Images/Travel.png";
import gift from "../../assets/Images/Gift.png";
import { Link } from "react-router";

function Content() {
  const [isHovered, setIsHovered] = useState(false);
  const array = [
    {
      name: "Bags",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: bag,
      button: "SHOP NOW",
      link: "/plp",
    },
    {
      name: "Jewelry",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: jwell,
      button: "SHOP NOW",
      link: "",
    },
    {
      name: "Travel",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: travel,
      button: "SHOP NOW",
      link: "",
    },
    {
      name: "Gifting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: gift,
      button: "SHOP NOW",
      link: "",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto py-12 px-5 md:px-16 space-y-14 overflow-x-hidden">
      {array.map((item, idx) => (
        <div className="maincont ">
          <div className="card flex gap-9 flex-col md:flex-row items-center ">
            <div
              className={` left  md:w-3/5 flex flex-col rounded-xl overflow-hidden order-first
                ${idx % 2 !== 0 ? "md:order-last" : "md:order-first"} `}
            >
              <img
                src={item.image}
                alt=""
                className={`rounded-xl    ${
                  idx % 2 !== 0 ? "self-end" : "self-start"
                }  `}
                data-aos={idx % 2 !== 0 ? "fade-left" : "fade-right"}
                data-aos-duration="1500"
              />
            </div>

            <div className="right flex justify-center items-center md:w-2/5">
              <div className=" text-center">
                <div className="heading">
                  <h1 className="font-med text-2xl font-semibold ">
                    {item.name}
                  </h1>
                </div>
                <div className="text  py-6">
                  <p className="font-book text-base font-normal max-w-72 text-center text-[#9A9A9A]">
                    {item.text}
                  </p>
                </div>

                <Link
                  className="button py-3 md:py-8 flex justify-center"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to={item.link}
                >
                  
                  <button className="relative text-black font-semibold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base overflow-hidden justify-center group">
                    {/* Background animation */}
                    <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                    {/* Text content */}
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      {item.button}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
