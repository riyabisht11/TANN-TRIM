import React, { useEffect, useState } from "react";
import logo from "../../assets/SVG/whitelogo.svg";
import cart from "../../assets/SVG/whitecart.svg";
import cross from "../../assets/SVG/whitecross.svg";
import searchicon from "../../assets/SVG/searchicon.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Register from "../../Pages/Home/Register";
import Search from "./Search";

function Menu({ functionality, open }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [showMenu, setshowMenu] = useState(true);

  // const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // const toggleRegister = () => {
  //   functionality(); // Close the menu
  //   setIsRegisterOpen(true);
    
  // };

  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const toggleSearch = () => {
  //   functionality();
  //   setIsSearchOpen(true);
   
  // };

  // useEffect(() => {
  //   if (isRegisterOpen || isSearchOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isRegisterOpen, isSearchOpen]);

  const [activePage, setActivePage] = useState("menu");
  const openSearch = () => {
    setActivePage("search");
  };
  const openRegister = () => {
    setActivePage("register");
  };
  const closeAll = () => {
    setActivePage("menu");
  };

  useEffect(() => {
    if (activePage !== "menu") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activePage]);

  return (
    <>
      {/* {isRegisterOpen && (
        <Register
          functionality={() => setIsRegisterOpen(false)}
          open={isRegisterOpen}
        />
      )}

      {isSearchOpen && (
        <Search functionality={toggleSearch} open={isSearchOpen} />
      )} */}
      {activePage === "register" && <Register functionality={closeAll} open={true} />}
      {activePage === "search" && <Search functionality={closeAll} open={true} />}

      {activePage === "menu" && (<main
        className={`bg-[#444C40] h-screen w-full  ${
          open ? "translate-y-0" : "-translate-y-full"
        } fixed inset-0 overflow-hidden z-[999]   transform transition-transform duration-300 ease-in-out`}
      >
        <nav
          className={` max-w-screen-2xl mx-auto py-6 px-5 md:px-16 bg-[#444C40] h-full`}
        >
          <div className="navcontent flex justify-between ">
            <div className="one flex gap-15 items-end">
              <div className="menu flex gap-6 pr-24 items-end">
                <div onClick={functionality} className="cursor-pointer">
                  <img src={cross} alt="" className="mb-1" />
                </div>

                <h1 className="font-ave text-base font-normal leading-none text-white">
                  Menu
                </h1>
              </div>
              <div onClick={openSearch} className="search flex gap-5 items-end cursor-pointer">
                <div>
                  <img src={searchicon} alt="" className="cursor-pointer" />
                </div>

                <h1 className="font-ave text-base font-normal leading-none text-white">
                  Search
                </h1>
              </div>
            </div>

            <div className="logo ">
              <img src={logo} alt="" />
            </div>

            <div className="two flex gap-15">
              <div onClick={openRegister} className="register cursor-pointer">
                <h1 className="font-ave text-base font-normal text-white">
                  Register / Log In
                </h1>
              </div>
              <div className="cart px-[61px] relative">
                <div className="absolute bg-white text-[#444C40] rounded-full size-4 text-xs flex justify-center items-center -top-1 right-14 ">
                  {totalQuantity}
                </div>
                <img src={cart} alt="" />
              </div>
            </div>
          </div>

          <div className="flex justify-between py-20">
            <div>
              <ul className="text-white font-med font-semibold text-2xl space-y-6 cursor-pointer">
                <li>Bags</li>
                <li className="opacity-40 hover:opacity-100">Jewelry</li>
                <li className="opacity-40 hover:opacity-100">Travel</li>
                <li className="opacity-40 hover:opacity-100">Gifting</li>
              </ul>
              <h1 className="text-white text-base font-med font-semibold pt-20">
                Track
              </h1>
            </div>

            <div>
              <ul className="space-y-9 cursor-pointer ">
                <div className="flex gap-5">
                  <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                    Backpacks
                  </li>
                  <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                    NEW
                  </button>
                </div>

                <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                  Tote Bags
                </li>

                <div className="flex gap-5">
                  <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                    Slings
                  </li>
                  <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                    NEW
                  </button>
                </div>

                <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                  Leather Bags
                </li>

                <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                  Wallets
                </li>

                <div className="flex gap-5">
                  <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                    Zip Wallet
                  </li>
                  <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                    NEW
                  </button>
                </div>
              </ul>
            </div>

            <div>
              <ul className="space-y-6 cursor-pointer">
                <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                  Passport Holder
                </li>

                <div className="flex gap-5">
                  <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                    Phone and Laptop Covers
                  </li>
                  <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                    NEW
                  </button>
                </div>

                <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                  Pouches
                </li>

                <div className="flex gap-5">
                  <li className="font-med text-base text-white opacity-40 hover:opacity-100">
                    Clearance Sale
                  </li>
                  <button className="py-1 px-2 bg-white rounded-sm text-[8px] text-black">
                    %
                  </button>
                </div>
              </ul>
            </div>
            <div></div>
          </div>
        </nav>
      </main>
      )}
    </>
  );
}

export default Menu;
