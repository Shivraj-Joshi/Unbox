import React from "react";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-black w-full h-[400px] p-4 flex  justify-center mt-6">
        <div className=" w-[80%] h-[350px] flex justify-center items-center justify-evenly mt-3 ">
          <div className=" w-[200px] h-[200px]">
            <h3 className=" text-[#ff2025] font-[500] text-[28px]">
              About us{" "}
            </h3>
            <p className="text-[18px] text-white ">
              At UnBox, we are passionate about delivering exceptional shopping
              experiences.
            </p>
          </div>
          <div className=" w-[200px] h-[200px]">
            <h3 className=" text-[#ff2025] font-[500] text-[28px]">
              Quick Links
            </h3>

            <ul className=" text-white text-[18px] ">
              <li>
                <NavLink
                  to=""
                  //   className={({ isActive }) =>
                  //     isActive ? "text-slate-200" : "text-black"
                  //   }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  //   className={({ isActive }) =>
                  //     isActive ? "text-slate-200" : "text-black"
                  //   }
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  //   className={({ isActive }) =>
                  //     isActive ? "text-slate-200" : "text-black"
                  //   }
                >
                  About us
                </NavLink>
              </li>{" "}
            </ul>
          </div>
          <div className=" w-[200px] h-[200px]">
            <h3 className=" text-[#ff2025] font-[500] text-[28px]">
              Follow us
            </h3>
            <p className=" text-white hover:text-[#ff2020] text-[22px] ">
              <i class="ri-instagram-fill"></i>
            </p>
            <p className="text-white hover:text-[#ff2020] text-[22px] ">
              <i class="ri-twitter-fill"></i>
            </p>
            <p className="hover:text-[#ff2020] text-white text-[22px] ">
              <i class="ri-facebook-circle-fill"></i>
            </p>
          </div>
        </div>
        {/* <p className="text-white">© 2025 UnBox All rights reserved.</p> */}
      </div>
    </>
  );
};

export default Footer;
