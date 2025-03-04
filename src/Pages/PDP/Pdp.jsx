import image1 from "../../assets/Images/Pdpimg.png";
import React, { useRef, useState } from "react";
import cart from "../../assets/SVG/whitecart.svg";
import blackarrow from "../../assets/SVG/blackarrow.svg";
import blackdel from "../../assets/SVG/blackdel.svg";
import arrow from "../../assets/SVG/arrow.svg";
import play from "../../assets/SVG/Play.svg";
import product1 from "../../assets/Images/Product 1.png";
import Features from "../../Components/Home/Pdp components/Features";
import Similarproduct from "../../Components/Home/Pdp components/Similarproduct";
import Customerliked from "../../Components/Home/Pdp components/Customerliked";
import { Link, useLocation, useParams } from "react-router";
import video from "../../assets/Videos/productvideo.mp4";
import { useDispatch } from "react-redux";
import { PLP } from "../../Utils/Productlist";
import { addToCart } from "../../Slices/cartSlice";

function Pdp({ array }) {
  const { id } = useParams();
  console.log(id);
  const bag = array.find((item) => item.id === parseInt(id));
  if (!bag) {
    return <div>Product not found.</div>;
  }

  const circle = [
    { outer: "border-[#444C40]", inner: "bg-[#444C40]" },
    { outer: "border-[#A16B1A]", inner: "bg-[#A16B1A]" },
    { outer: "border-[#254779]", inner: "bg-[#254779]" },
    { outer: "border-[#000000]", inner: "bg-[#000000]" },
  ];

  const sizes = [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }];
  const [selectedSize, setSelectedSize] = useState(null);

  const handleClick = (name) => {
    setSelectedSize(name);
  };
  const swipe = [1, 2, 3, 4];

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item));

    setShowPopup(true);

    // Hide popup after 2.5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
  };
  

  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-16 py-8 sm:py-12 overflow-x-hidden">
      <main>
        <div className="flex flex-col lg:flex-row gap-5 md:gap-0 lg:gap-14 items-center lg:items-start">
          <div className="left w-auto md:w-2/3 flex flex-col items-center ">
            <div>
              <img src={image1} alt="" />
            </div>
            <div className="flex space-x-7  lg:space-x-14 py-5 md:py-10 items-center">
              <div className="rounded-full size-8 lg:size-10 border-2 border-[#444C40] border-opacity-40 flex justify-center items-center">
                <div className="rounded-full size-2 lg:size-3 bg-[#444C40]"></div>
              </div>
              {swipe.map((item, idx) => (
                <div className="rounded-full size-2 lg:size-3 bg-[#DFDFDF]"></div>
              ))}
            </div>
          </div>

          <div className="right w-auto lg:w-1/3 pt-13 md:pt-14 lg:pt-52 space-y-7 md:space-y-14 self-start">
            <div>
              <h1 className="font-med font-semibold text-2xl md:text-3xl lg:text-5xl max-w-43 md:max-w-96">
                {bag.name}
              </h1>
              <h1 className="font-book font-normal text-lg md:text-xl lg:text-3xl text-[#444C40] pt-2 md:pt-5">
                ₹ {bag.discountedPrice}
              </h1>
              <h1 className="font-med font-semibold text-[9px] lg:text-xs">
                inclusive of all taxes
              </h1>
            </div>
            <div className="space-y-7 lg:space-y-12">
              <div className="font-book text-xs md:text-base font-normal text-[#707070]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <div className="colored circle flex space-x-4 md:space-x-8 lg:space-x-12 ">
                {circle.map((item, idx) => (
                  <div
                    className={`flex justify-center items-center green size-4 md:size-8 rounded-full border-2 shrink-0 ${item.outer}`}
                  >
                    <div
                      className={`${item.inner} rounded-full size-2 md:size-3`}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="size flex space-x-4 lg:space-x-12">
                {sizes.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleClick(item.name)}
                    className={`flex group hover:bg-[#444C40] justify-center items-center size-5 md:size-10 shadow-md rounded-md duration-200 transition-colors cursor-pointer ${
                      selectedSize === item.name ? "bg-[#444C40]" : "bg-white"
                    }`}
                  >
                    <h1
                      className={`font-book font-normal text-[9px] md:text-base group-hover:text-white ${
                        selectedSize === item.name ? "text-white" : "text-black"
                      }`}
                    >
                      {item.name}
                    </h1>
                  </div>
                ))}
              </div>
              <div>

                {showPopup && (
                  <div className="fixed top-5 right-5 z-50 bg-[#444C40] font-book text-white px-6 py-3 rounded-md shadow-lg animate-fadeInOut">
                    ✔ Item Added to Cart!
                  </div>
                )}

                <div
                  onClick={(e) => {
               
                    handleAddToCart(bag); // Add item to cart
                  }}
                  className="cartbutton flex bg-[#444C40] gap-3 md:gap-5 rounded-xl justify-center py-4 hover:brightness-125 duration-500 transition-all"
                >
                  <img src={cart} alt="" />
                  <button className="font-roboto font-normal text-lg lg:text-xl text-white">
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex-row ">
          <div className="productdetails space-y-6 border-t-2 pt-12 w-auto md:w-3/5 border-[#D1D1D1] border-opacity-30">
            <div>
              <h1 className="font-med font-semibold text-2xl">
                PRODUCT DETAILS
              </h1>
            </div>
            <div className="font-book font-normal text-base text-[#707070] max-w-80">
              <h1>
                Green solid handheld bag, has a zip closure 1 main compartment,
                3 inner pockets <br />
                Tablet sleeve: No <br />
                Two Handles <br /> Warranty: 15 days
              </h1>
              <h1 className="font-book font-normal text-base text-[#707070] max-w-80">
                Warranty provided by brand/manufacturer
              </h1>
            </div>
            <div>
              <div className="">
                <h1 className="font-ave font-semibold text-base max-w-80">
                  Size & Fit
                </h1>
                <h1 className="font-ave font-normal text-base text-[#707070] max-w-80">
                  Height: 32 cm <br />
                  Width: 34 cm <br />
                  Depth: 8 cm
                </h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className="font-ave font-semibold text-base">
                  Material & Care
                </h1>
                <h1 className="font-ave font-normal text-base text-[#707070]">
                  PU <br />
                  Wipe with a clean, dry cloth to remove dust
                </h1>
              </div>
            </div>
            <div className="flex gap-1 pl-">
              <img src={blackarrow} alt="" className="cursor-pointer"/>
              <h1 className="font-ave font-semibold text-base ">
                Specification
              </h1>
            </div>
          </div>
          <div className="deliveryoptions py-10 lg:py-24 ">
            <div className="font-med font-semibold text-2xl flex gap-4 py-8">
              <h1>DELIVERY OPTIONS</h1>
              <img src={blackdel} alt="" />
            </div>
            <div className="bg-white flex justify-between w-[250px] md:w-[350px] px-3 py-2  text-sm rounded-lg items-center border-2">
              <div>
                <input type="text" id="number" className="focus:outline-none" />
              </div>
              <div className="bg-[#444C40] rounded-lg ">
                <img src={arrow} alt="" className="px-2 md:px-4 py-2 md:py-3" />
              </div>
            </div>
            <div>
              <h1 className="font-book text-xs font-normal text-[#707070] py-2">
                Please enter PIN code to check delivery time Cash / Card on
                Delivery Availability
              </h1>
            </div>
            <div>
              <h1 className="font-book text-base font-normal text-[#707070] py-12 max-w-80">
                100% Original Products <br />
                Free Delivery on order above Rs. 1199 <br />
                Cash on delivery might be available <br /> Easy 30 days returns
                and exchanges <br />
                Try & Buy might be available
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row md:items-center">
          <div data-aos="fade-right" data-aos-duration="1500" className="">
            <h1 className="font-comme text-3xl md:text-5xl lg:text-7xl xl:text-[100px] font-extralight text-[#444C40] text-center md:text-start ">
              Delight in the <br />
              Details
            </h1>
          </div>

          <div className="py-10 md:py-0">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              className="relative md:shrink-0 top-0 md:-top-16 lg:-top-28 w-[250px] lg:w-[350px] xl:w-[502px] aspect-square rounded-full overflow-hidden mx-auto md:mx-0"
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                src={video}
                className="w-full h-full object-cover"
                loop
                playsInline
                poster={product1}
              />

              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer"
                  onClick={togglePlay}
                >
                  <img src={play} alt="Play Button" className="w-16 md:w-20" />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Features />
      <Similarproduct />
      <Customerliked />
    </div>

    // <Features/>
  );
}

export default Pdp;
