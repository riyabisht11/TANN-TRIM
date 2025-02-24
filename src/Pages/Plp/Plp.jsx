import React, { useState } from "react";
import product from "../../assets/Images/Product 1.png";
import { Link } from "react-router-dom"; // Fixed import
import { useDispatch } from "react-redux";
import { addToCart } from "../../Slices/cartSlice";

function Plp() {
  const array = [
    {
      id: 1,
      name: "Classic Tote",
      description: "Elegant, Durable, Spacious",
      price: "4,500.00",
      discountedPrice: "3,500.00",
      discountPercent: 22,
      color: "Black",
      finish: "Matte",
    },
    {
      id: 2,
      name: "Vintage Satchel",
      description: "Stylish, Compact, Versatile",
      price: "5,200.00",
      discountedPrice: "3,900.00",
      discountPercent: 25,
      color: "Olive Green",
      finish: "Leather",
    },
    {
      id: 3,
      name: "Urban Backpack",
      description: "Trendy, Lightweight, Durable",
      price: "3,200.00",
      discountedPrice: "2,400.00",
      discountPercent: 30,
      color: "Black",
      finish: "Matte",
    },
    {
      id: 4,
      name: "Leather Sling",
      description: "Premium, Sleek, Handy",
      price: "5,800.00",
      discountedPrice: "4,600.00",
      discountPercent: 20,
      color: "Olive Green",
      finish: "Leather",
    },
    {
      id: 5,
      name: "Travel Duffle",
      description: "Spacious, Sturdy, Waterproof",
      price: "7,000.00",
      discountedPrice: "5,600.00",
      discountPercent: 20,
      color: "Olive Green",
      finish: "Leather",
    },
    {
      id: 6,
      name: "Canvas Messenger",
      description: "Casual, Functional, Comfortable",
      price: "3,800.00",
      discountedPrice: "2,900.00",
      discountPercent: 24,
      color: "Black",
      finish: "Matte",
    },
    {
      id: 7,
      name: "Classic Tote",
      description: "Elegant, Durable, Spacious",
      price: "4,500.00",
      discountedPrice: "3,500.00",
      discountPercent: 22,
      color: "Black",
      finish: "Matte",
    },
    {
      id: 8,
      name: "Vintage Satchel",
      description: "Stylish, Compact, Versatile",
      price: "5,200.00",
      discountedPrice: "3,900.00",
      discountPercent: 25,
      color: "Brown",
      finish: "Glossy",
    },
    {
      id: 9,
      name: "Urban Backpack",
      description: "Trendy, Lightweight, Durable",
      price: "3,200.00",
      discountedPrice: "2,400.00",
      discountPercent: 30,
      color: "Brown",
      finish: "Glossy",
    },
    {
      id: 10,
      name: "Leather Sling",
      description: "Premium, Sleek, Handy",
      price: "5,800.00",
      discountedPrice: "4,600.00",
      discountPercent: 20,
      color: "Olive Green",
      finish: "Leather",
    },
    {
      id: 11,
      name: "Travel Duffle",
      description: "Spacious, Sturdy, Waterproof",
      price: "7,000.00",
      discountedPrice: "5,600.00",
      discountPercent: 20,
      color: "Brown",
      finish: "Glossy",
    },
    {
      id: 12,
      name: "Canvas Messenger",
      description: "Casual, Functional, Comfortable",
      price: "3,800.00",
      discountedPrice: "2,900.00",
      discountPercent: 24,
      color: "Black",
      finish: "Matte",
    },
  ];

  // State to track if a card is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false); 
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log(item)
    dispatch(addToCart(item))

    setShowPopup(true);

    // Hide popup after 2.5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);;
  };


  return (
    <div className="max-w-screen-2xl mx-auto px-5 md:px-16 py-10 md:py-16">
      <div className="pb-5 md:pb-10 flex justify-center">
        <h1 className="font-book font-normal text-3xl text-[#444C40]">
          Tote Bags
        </h1>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-5 right-5 z-50 bg-[#444C40] font-book text-white px-6 py-3 rounded-md shadow-lg animate-fadeInOut">
           ✔ Item Added to Cart!
        </div>
      )}

      {/* Parent grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        {array.map((item, idx) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredIndex(idx)} // Set hovered index
            onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
            className="relative mx-auto"
          >
            <div
              
             
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
                <Link to="/pdp">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }
                    className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out  bg-white text-black font-med rounded cursor-pointer left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 py-3 px-7"
                  >
                    QUICK VIEW
                  </button>
                </Link>
                <img src={product} alt="Bag" className="w-full" />
              </div>

              <div onClick={() => handleAddToCart(item)} className="bg-[#444C40] space-y-4 text-white py-5 px-7 rounded-b-xl">
                <div>
                  <h1 className="font-med text-2xl">{item.name}</h1>
                </div>
                <div>
                  <h1 className="font-book text-base font-normal">
                    {item.description}
                  </h1>
                </div>
                <div className="flex gap-5 font-normal text-sm lg:text-base">
                  <h1 className="text-base md:text-xl lg:text-2xl whitespace-nowrap font-med">
                    ₹ {item.discountedPrice}
                  </h1>
                  <h1 className="opacity-30 line-through whitespace-nowrap font-book">
                    ₹ {item.price}
                  </h1>
                  <h1 className="whitespace-nowrap font-med">
                    ({item.discountPercent} % OFF)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Plp;
