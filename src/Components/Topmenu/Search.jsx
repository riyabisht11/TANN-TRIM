import React, { useEffect, useState } from "react";
import ham from "../../assets/SVG/whiteham.svg";

import logo from "../../assets/SVG/whitelogo.svg";
import cart from "../../assets/SVG/whitecart.svg";
import cross from "../../assets/SVG/whitecross.svg";
import searchicon from "../../assets/SVG/searchicon.svg";
import { useSelector } from "react-redux";
import Register from "../../Pages/Home/Register";
import Menu from "./Menu";
import Cart from "./Cart";

function Search({ functionality, open }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [showSearch, setshowSearch] = useState(true);

  const [activePage, setActivePage] = useState("search");

  // Open Menu
  const openMenu = () => {
    setActivePage("menu");
  };

  // Open Register
  const openRegister = () => {
    setActivePage("register");
  };

  // Close all and return to Search
  const closeAll = () => {
    setActivePage("search");
  };

  const openCart = () => {
    setActivePage("cart");
  };

  useEffect(() => {
    if (activePage !== "search") {
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
       {activePage === "register" && <Register functionality={closeAll} open={true} />}
      
      {/* Render Menu page */}
      {activePage === "menu" && <Menu functionality={closeAll} open={true} />}
      {activePage === "cart" && <Cart functionality={closeAll} open={true} />}


      {activePage === "search" && (<main
        className={`bg-[#444C40] h-screen w-full ${
          open ? "translate-y-0" : "-translate-y-full"
        } absolute inset-0 overflow-hidden z-[999] transform transition-transform duration-300 ease-in-out`}
      >
        <nav
          className={`   max-w-screen-2xl mx-auto py-6 px-5 md:px-16  bg-[#444C40] h-full`}
        >
          <div className="navcontent flex justify-between ">
            <div className="one flex gap-15 items-end">
              <div className="menu flex gap-6 pr-24 items-end cursor-pointer">
                <div onClick={openMenu} className="cursor-pointer">
                  <img src={ham} alt="" className="mb-1" />
                </div>

                <h1 className="font-ave text-base font-normal leading-none text-white">
                  Menu
                </h1>
              </div>
              <div className="search flex gap-5 items-end">
                <div>
                  <img
                    onClick={functionality}
                    src={cross}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>

                <h1 className="font-ave text-base font-normal leading-none text-white">
                  Search
                </h1>
              </div>
            </div>

            <div className="logo ">
              <img src={logo} alt="" />
            </div>

            <div className="two flex gap-15 cursor-pointer">
              <div onClick={openRegister} className="register">
                <h1 className="font-ave text-base font-normal text-white">
                  Register / Log In
                </h1>
              </div>
              <div onClick={openCart} className="cart px-[61px] relative">
                <div className="absolute bg-white text-[#444C40] rounded-full size-4 text-xs flex justify-center items-center -top-1 right-14 ">
                  {totalQuantity}
                </div>
                <img src={cart} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-[#444C40] flex justify-center items-center flex-col py-14 ">
            <div>
              <form action="">
                <div className="flex gap-4">
                  <img src={searchicon} alt="" />
                  <input
                    type="text"
                    placeholder="Type here ..."
                    className="text-white focus:outline-none bg-transparent border-b-2 py-2 border-opacity-0 placeholder:font-med opacity-40 text-base font-semibold"
                  />
                </div>
              </form>
            </div>
            <div className="py-20  justify-between items-center ">
              <ul className="font-med text-base font-normal text-white  space-y-5 cursor-pointer">
                <li className="transition-all opacity-40 hover:opacity-100">
                  Backpacks
                </li>
                <li className="transition-all opacity-40 hover:opacity-100">
                  Tote Bags
                </li>
                <li className="transition-all opacity-40 hover:opacity-100">
                  Slings
                </li>
                <li className="transition-all opacity-40 hover:opacity-100">
                  Leather Bags
                </li>
                <li className="transition-all opacity-40 hover:opacity-100">
                  Wallets
                </li>
                <li className="transition-all opacity-40 hover:opacity-100">
                  Zip Wallet
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    )}
    </>
  );
}

export default Search;
