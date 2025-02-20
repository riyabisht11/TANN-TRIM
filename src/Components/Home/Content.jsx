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
      text: "Elevate your everyday look with our sleek and stylish shoulder bag, designed for modern versatility. Crafted from high-quality, durable materials, this bag combines fashion and functionality, making it the perfect companion for work, travel, and casual outings.",
      image: bag,
      button: "SHOP NOW",
      link: "/plp",
    },
    {
      name: "Jewelry",
      text: "Elevate your style with our exquisite jewelry collection, designed to add a touch of luxury to every occasion. Crafted with precision and passion, our pieces blend classic elegance with modern trends, ensuring you always shine.",
      image: jwell,
      button: "SHOP NOW",
      link: "",
    },
    {
      name: "Travel",
      text: "Make every trip seamless with our premium travel essentials, designed to keep you organized, comfortable, and stress-free on the go. From durable luggage and spacious travel bags to compact organizers, toiletry kits, and travel-friendly accessories.",
      image: travel,
      button: "SHOP NOW",
      link: "",
    },
    {
      name: "Gifting",
      text: "Make every moment special with our thoughtfully curated gifting options, perfect for any celebration. Whether you're looking for elegant jewelry, stylish bags, luxurious travel essentials, or personalized keepsakes, our collection offers something for everyone.",
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
              className={` left  md:w-1/2 flex flex-col rounded-xl overflow-hidden order-first
                ${idx % 2 !== 0 ? "md:order-last" : "md:order-first"} `}
            >
              <img
                src={item.image}
                alt=""
                className={`rounded-xl    ${
                  idx % 2 !== 0 ? "self-end" : "self-start"
                } w-full lg:w-[550px] mx-auto`}
                data-aos={idx % 2 !== 0 ? "fade-left" : "fade-right"}
                data-aos-duration="1500"
              />
            </div>

            <div className="right flex justify-center items-center md:w-1/2">
              <div className=" text-center">
                <div className="heading">
                  <h1 className="font-med text-2xl font-semibold ">
                    {item.name}
                  </h1>
                </div>
                <div className="text  pt-6">
                  <p className="font-book text-xs lg:text-base font-normal max-w-72 text-center text-[#9A9A9A]  lg:">
                    {item.text}
                  </p>
                </div>

                <Link
                  className="button pt-3 md:pt-8 flex justify-center"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to={item.link}
                >
                  
                  <button className="relative text-black font-semibold py-3 lg:py-3 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base overflow-hidden justify-center group">
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
