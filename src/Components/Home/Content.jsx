import React from "react";
import bag from "../../assets/Images/Bag.png";
import jwell from "../../assets/Images/Jwellery.png";
import travel from "../../assets/Images/Travel.png";
import gift from "../../assets/Images/Gift.png";

function Content() {
  const array = [
    {
      name: "Bags",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: bag,
      button: "SHOP NOW",
    },
    {
      name: "Jewelry",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: jwell,
      button: "SHOP NOW",
    },
    {
      name: "Travel",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: travel,
      button: "SHOP NOW",
    },
    {
      name: "Gifting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      image: gift,
      button: "SHOP NOW",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto py-12 px-5 md:px-16 space-y-14 ">
      {array.map((item, idx) => (
        <div className="maincont ">
          <div className="card flex gap-9 flex-col md:flex-row items-center md:items-start">
            <div
              className={` left md:w-3/5  rounded-xl overflow-hidden order-first
                ${idx % 2 !== 0 ? "md:order-first" : "md:order-last"} `}
            >
              <img src={item.image} alt="" className="rounded-xl w-full" />
            </div>

            <div className="right flex justify-center items-center md:w-2/5">
              <div className=" text-center">
                <div className="heading">
                  <h1 className="font-ave text-2xl font-semibold ">
                    {item.name}
                  </h1>
                </div>
                <div className="text  py-6">
                  <p className="font-ave text-base font-normal max-w-72 text-center text-[#9A9A9A]">
                    {item.text}
                  </p>
                </div>
                <div className="button py-3 md:py-8">
                  <button className="font-ave  text-base font-semibold">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
