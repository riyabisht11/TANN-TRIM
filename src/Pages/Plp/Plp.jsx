import React, { useState } from "react";
import product from "../../assets/Images/Product 1.png";
import { Link } from "react-router-dom"; // Fixed import

function Plp() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // State to track if a card is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-16 py-10 md:py-16">
      <div className="pb-5 md:pb-10 flex justify-center">
        <h1 className="font-book font-normal text-3xl text-[#444C40]">
          Tote Bags
        </h1>
      </div>

      {/* Parent grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {array.map((item, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)} // Set hovered index
            onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
            className="relative mx-auto"
          >
            <Link
              to="/pdp"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className={`card pt-10 border rounded-xl border-[#D1D1D1] inline-block shadow-md 
                transition duration-300 ease-in-out ${
                  hoveredIndex !== null
                    ? hoveredIndex === idx
                      ? "scale-105 !blur-none"
                      : "blur-sm"
                    : "!blur-none"
                }`} // Apply blur to other cards on hover
            >
              <div className="relative group">
                <button className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out  bg-white text-black font-med rounded cursor-pointer left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 py-3 px-7">
                  QUICK VIEW
                </button>
                <img src={product} alt="Bag" className="w-full" />
              </div>

              <div className="bg-[#444C40] space-y-4 text-white py-5 px-7 rounded-b-xl">
                <div>
                  <h1 className="font-med text-2xl">Lightweight Bag</h1>
                </div>
                <div>
                  <h1 className="font-book text-base font-normal">
                    Black Quilted Satchel Bag
                  </h1>
                </div>
                <div className="flex gap-5 font-normal text-sm lg:text-base">
                  <h1 className="text-base md:text-xl lg:text-2xl whitespace-nowrap font-med">
                    ₹ 3,570.00
                  </h1>
                  <h1 className="opacity-30 line-through whitespace-nowrap font-book">
                    ₹ 6,570.00
                  </h1>
                  <h1 className="whitespace-nowrap font-med">(40% OFF)</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Plp;
