import React from "react";
import Card from "./Card";

const Home = () => {
  return (
    <div>
      {/* sale news */}
      <div className="w-full h-auto text-center bg-black ">
        <p className="text-white font-[400] text-[18px] py-2">
          Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer Shop
          Now
        </p>
      </div>
      {/* displayed video */}
      <div className="relative w-full h-[550px] ">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/4440949/4440949-hd_1920_1080_25fps.mp4" />
        </video>
        <h1 className="absolute inset-0 text-[35px] font-[600] text-black mt-[150px] ml-[100px]  ">
          <span className="text-[#ff2020] text-[50px] font-[900] ">UnBox</span>{" "}
          <br />
          For All Your Needs
        </h1>
      </div>
      {/* tag line */}
      <div className=" mt-4">
        <p className=" text-black text-center font-bold text-[18px] ">
          We {""}
          <span className="text-[#ff2020] font-bold text-[25px] ">Deliver</span>
          , You{" "}
          <span className="text-[#ff2020] font-bold text-[25px] ">Unbox</span>
        </p>
      </div>
      {/* card element injected */}
      <Card />
    </div>
  );
};

export default Home;
