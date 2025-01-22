import React from "react";
import facebook from "../assets/SVG/facebook.svg";
import instagram from "../assets/SVG/instagram.svg";
import twitter from "../assets/SVG/twitter.svg";
import youtube from "../assets/SVG/youtube.svg";
import arrow from "../assets/SVG/arrow.svg";
import ret from "../assets/SVG/Return.svg";
import del from "../assets/SVG/Delivery.svg";

function Footer() {
  const social = [
    { img: facebook },
    { img: instagram },
    { img: twitter },
    { img: youtube },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-16 bg-[#444C40] pt-16 pb-5">
      <div className="flex justify-between  flex-col lg:flex-row gap-8 lg:gap-0 items-center lg:items-start">
        <div className="shopping font-ave text-white text-base font-normal text-center lg:text-start">
          <ol className="space-y-3 lg:space-y-6">
            <li className="font-semibold underline">SHOPPING</li>
            <li>Men</li>
            <li>Women</li>
            <li>Travel</li>
            <li>Gift</li>
          </ol>
        </div>
        <div className="usefullinks font-ave text-white text-base font-normal text-center lg:text-start">
          <ol className="space-y-3 lg:space-y-6">
            <li className="font-semibold underline">USEFUL LINKS</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Track Orders</li>
            <li>T&C</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ol>
        </div>

        <div className="keep space-y-6 text-center lg:text-start">
          <div>
            <h1 className="text-white font-ave underline ">KEEP IN TOUCH</h1>
          </div>
          <div className="icons flex justify-between space-x-4 md:space-x-8 ">
            {social.map((item, idx) => (
              <div className="size-10 bg-white rounded-lg flex justify-center items-center">
                <img src={item.img} alt="" className=" " />
              </div>
            ))}
          </div>
        </div>
        <div className="lastcont">
          <div className="space-y-4">
            <h1 className="font-ave text-white font-semibold text-[10px]">
              GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS AND SURPRISES
            </h1>

            <div className="bg-white flex justify-between w-[350px] px-3 py-2 text-sm rounded-lg items-center">
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="bg-[#444C40] rounded-lg ">
                <img src={arrow} alt="" className="px-4 py-3" />
              </div>
            </div>

            <div className="max-w-80 pl-8">
              <h1 className="text-ave font-semibold text-[8px] text-white opacity-40">
                You are signing up to receive product updates and newsletters.
                By signing up, you are consenting to our privacy policy but you
                can opt out at any time.
              </h1>
            </div>
          </div>

          <div className="py-5 md:py-8 pl-10 lg:pl-20 space-y-12">
            <div className="return flex gap-5">
              <div>
                <img src={ret} alt="" />
              </div>
              <div className="max-w-44">
                <h1 className="text-ave font-semibold text-base text-white">
                  Return Within 30 days of receiving your order
                </h1>
              </div>
            </div>
            <div className="delivery flex gap-5 ">
              <div>
                <img src={del} alt="" />
              </div>
              <div className="max-w-48">
                <h1 className="text-ave font-semibold text-base text-white">
                  Get free delivery for every order above ₹1599
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-5 md:pt-12">
            <h1 className="text-ave text-white font-normal text-base opacity-40">
              © 2020 www.tanntrim.com. All rights reserved.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
