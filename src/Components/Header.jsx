import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../Context/cartContext";

const Header = () => {
  const { count } = useContext(cartContext);
  return (
    <div className=" sticky top-0 z-50 shadow-xl flex h-16 w-full bg-slate-100 px-4 justify-evenly ">
      {/* div for the Logo */}
      <div className="flex items-center">
        <span className=" text-[30px] font-bold text-[#ff2020]  ">UnBox</span>
      </div>

      {/* div for the links */}

      <div className=" hidden md:flex space-x-20 text-white mt-[20px]  cursor-pointer">
        <ul className="flex  space-x-8">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "text-[#ff2020]" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "text-[#ff2020]" : "text-black"
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#ff2020]" : "text-black"
              }
            >
              About us
            </NavLink>
          </li>{" "}
        </ul>
      </div>

      {/* div for buttons */}

      <div className="flex items-center space-x-4 mr-4">
        <input
          type="search"
          placeholder="Search here"
          className="w-64 h-10 rounded-2xl px-4  "
        />
        <button className="  text-black px-4 h-10">
          <span className=" hover:text-[#ff2020] text-2xl">
            <i class="ri-search-2-line"></i>
          </span>
        </button>
        <button className="  text-black  hover:text-[#ff2020]  px-4 h-10 text-2xl">
          <i class="ri-account-circle-fill"></i>{" "}
        </button>
        <NavLink to="/cart">
          {" "}
          <button className="relative hover:text-[#ff2020] text-black px-4 h-10 text-2xl">
            <i class="ri-shopping-cart-2-fill"></i>
            <div className="absolute w-5 h-5 top-0 right-0 flex items-center justify-center rounded-full bg-[#ff2020] text-white text-xs">
              {count}
            </div>{" "}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
