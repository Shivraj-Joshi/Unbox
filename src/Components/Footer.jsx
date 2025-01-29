import React from "react";
// import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-4 gap-6">
            {/* Shop Men */}
            <div>
              <h3 className="font-bold mb-3">Shop Men</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Clothing Fashion
                </li>
                <li className="hover:text-white cursor-pointer">Winter</li>
                <li className="hover:text-white cursor-pointer">Summer</li>
                <li className="hover:text-white cursor-pointer">Formal</li>
                <li className="hover:text-white cursor-pointer">Casual</li>
              </ul>
            </div>

            {/* Shop Women */}
            <div>
              <h3 className="font-bold mb-3">Shop Women</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Clothing Fashion
                </li>
                <li className="hover:text-white cursor-pointer">Winter</li>
                <li className="hover:text-white cursor-pointer">Summer</li>
                <li className="hover:text-white cursor-pointer">Formal</li>
                <li className="hover:text-white cursor-pointer">Casual</li>
              </ul>
            </div>

            {/* Baby Collection */}
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Track Your Order
                </li>
                <li className="hover:text-white cursor-pointer">Support</li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
                <li className="hover:text-white cursor-pointer">Carrier</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-3">Follow us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-[#ff2020] cursor-pointer text-2xl">
                  <i class="ri-facebook-circle-fill"></i>
                </li>
                <li className="hover:text-[#ff2020] cursor-pointer text-2xl">
                  <i class="ri-instagram-line"></i>
                </li>
                <li className="hover:text-[#ff2020] cursor-pointer text-2xl">
                  <i class="ri-twitter-x-line"></i>
                </li>
                {/* <li className="hover:text-white cursor-pointer">Formal</li>
                <li className="hover:text-white cursor-pointer">Casual</li> */}
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-500 text-sm">
            <p>
              Copyright ©2025 All rights reserved UnBox |
              <span className="text-red-500"> ❤️ </span>
              {/* <span className="text-red-500 font-semibold"> Colorlib</span> */}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
