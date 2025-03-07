import React, { useEffect, useState } from "react";
import ham from "../assets/SVG/ham.svg";
import search from "../assets/SVG/blacksearch.svg";
import logo from "../assets/SVG/TANN TRIM.svg";
import cart from "../assets/SVG/cart.svg";
import { Link } from "react-router";
import Register from "../Pages/Home/Register";
import Search from "../Components/Topmenu/Search";
import Menu from "../Components/Topmenu/Menu";
import Cart from "../Components/Topmenu/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleRegister } from "../Slices/modalSlice";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const isRegisterOpen = useSelector((state) => state.modal.isRegisterOpen); // ✅ Get Redux state
  console.log("initial state " + isRegisterOpen);

  const handleRegister = () => {
    dispatch(toggleRegister());
    console.log("handleRegister function " + isRegisterOpen);
  };

  useEffect(() => {
    // Check if a user is logged in
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [isRegisterOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // Refresh page after logout
  };

  // const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  // const toggleRegister = () => {
  //   setIsRegisterOpen(!isRegisterOpen);
  // };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    console.log("cart click");
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    if (isRegisterOpen || isSearchOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";

      // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup to reset the overflow style
    return () => {
      document.body.style.overflow = "";
    };
  }, [isRegisterOpen, isSearchOpen, isMenuOpen]);

  return (
    <>
      <Register functionality={handleRegister} open={isRegisterOpen} />
      <Search functionality={toggleSearch} open={isSearchOpen} />
      <Menu functionality={toggleMenu} open={isMenuOpen} />
      {isCartOpen && <Cart functionality={toggleCart} />}
      <div className="shadow-[0px_5px_20px_0px_rgba(0,_0,_0,_0.1)]">
        <nav className="max-w-screen-2xl mx-auto py-6 px-5 md:px-16 overflow-hidden ">
          <div className="navcontent flex justify-between items-center">
            <div className="one lg:flex  hidden lg:gap-15 items-end">
              <div className="menu  flex lg:gap-6 lg:pr-24 items-end">
                <div onClick={toggleMenu} className="cursor-pointer">
                  <img src={ham} alt="" className="mb-1 " />
                </div>

                <h1 className="font-ave text-base font-normal leading-none">
                  Menu
                </h1>
              </div>
              <div className="search  hidden lg:flex lg:gap-5 items-end  ">
                <div onClick={toggleSearch} className="">
                  <img src={search} alt="" className="cursor-pointer" />
                </div>

                <h1 className="font-ave text-base font-normal leading-none">
                  Search
                </h1>
              </div>
            </div>

            <Link to="/">
              <div className="logo ">
                <img src={logo} alt="" className=" w-24 lg:w-auto" />
              </div>
            </Link>

            <div className="two flex gap-8 lg:gap-16 items-center">
              {user ? (
                // If user is logged in, show email and logout button
                <div className="flex items-center gap-4">
                  <span className="font-ave text-sm lg:text-base font-semibold whitespace-nowrap text-[#444C40]">
                    {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="border rounded-md px-2 py-1 text-white font-med text-xs lg:text-sm bg-[#444C40] "
                  >
                    Logout
                  </button>
                </div>
              ) : (
                // If not logged in, show Register / Log In
                <div
                  onClick={handleRegister}
                  className="register cursor-pointer"
                >
                  <h1 className="font-ave text-xs lg:text-base font-normal whitespace-nowrap">
                    Register / Log In
                  </h1>
                </div>
              )}

              <div onClick={toggleCart} className="cart  relative inline-block">
                <div className="absolute bg-[#444C40] text-white rounded-full size-4 text-xs flex justify-center items-center -top-1 -right-2 ">
                  {totalQuantity}
                </div>
                <img src={cart} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
