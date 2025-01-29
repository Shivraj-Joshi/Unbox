import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
const About = () => {
  return (
    <div>
      {/* Who we are section */}
      <div className="h-[600px] w-full flex flex-col sm:flex-row  bg-slate-100">
        <div className="h-full w-[60%] ">
          <div>
            <div className="mt-16 ml-14  w-3/4 h-[500px] px-8 py-4 ">
              <h4 className="text-[#ff2020] ml-10 text-[35px] font-[500]  ">
                Who We Are
              </h4>
              <p className="text-black ml-10  text-[20px] font-[400] mt-2 ">
                At <span className="font-[600]">UnBox</span>, we are passionate
                about delivering exceptional shopping experiences. Founded with
                a vision to simplify your everyday needs, we are an innovative
                e-commerce platform dedicated to offering high-quality products
                that bring value and joy to your life. Whether you're shopping
                for the latest trends or everyday essentials, UnBox is your
                trusted partner. <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ad, itaque eos deleniti commodi asperiores optio atque in
                eveniet dolores recusandae molestias iste dignissimos quibusdam
                suscipit reprehenderit aspernatur, facilis nesciunt.
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
        <div className="h-full w-[40%]">
          <div>
            <img className="h-[500px] w-auto" src={image1} alt="" />
          </div>
        </div>
      </div>

      {/* what do we do section  */}
      <div className="text-center text-black text-[32px] font-[500] ">
        What Do We Do
      </div>
      <div>
        <div className="h-[600px] w-full flex flex-col sm:flex-row  bg-white">
          <div className="h-full w-[60%] ">
            <div>
              <div className="mt-16 ml-14  w-3/4 h-[500px] px-8 py-4 ">
                <h4 className="text-[#ff2020] ml-10 text-[35px] font-[500]  ">
                  Who We Are
                </h4>
                <p className="text-black ml-10  text-[20px] font-[400] mt-2 ">
                  We curate a wide selection of products ranging from fashion,
                  electronics, home essentials, and more. With a focus on
                  quality, affordability, and reliability, our mission is to
                  bring the best the market has to offer right to your
                  doorstep.. <br /> <br />
                  <span className="font-[500]">
                    Diverse Product Categories:
                  </span>{" "}
                  Explore a wide range of products tailored to meet your needs.
                  <br />
                  <br />
                  <span className="font-[500]">
                    Seamless Shopping Experience:
                  </span>{" "}
                  Enjoy user-friendly navigation, easy payment options, and
                  quick delivery. <br />
                  <br />
                  <span className="font-[500]">
                    Customer-Centric Approach:
                  </span>{" "}
                  Your satisfaction is our top priority.
                  <br /> <br />
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-[40%]">
            <div>
              <img className="h-[500px] w-auto" src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* why choose us section */}
      <div className="text-center text-black text-[32px] font-[500] mt-30 ">
        Why Choose{" "}
        <span className="text-[#ff2020] text-[38px] font-[600] ">UnBox</span>
      </div>
      <div className="w-full h-[500px] px-20 mt-12">
        <div className=" flex gap-2 bg-white w-3/4 h-[400px] ml-[180px] p-4">
          <div className="h-auto w-[250px] bg-white shadow-lg px-8 ">
            <img className="h-44 w-auto object-cover" src={image3} alt="" />
            <p className="text-center text-[#ff2020] text-[20px] font-[500] mt-2">
              Handpicked Quality
            </p>
            <p className="text-center text-black mt-2 ">
              We carefully select every product to ensure the best for you.
            </p>
          </div>
          <div className="h-auto w-[250px] bg-white shadow-lg px-8 ">
            <img className="h-44 w-auto object-cover" src={image4} alt="" />
            <p className="text-center text-[#ff2020] text-[20px] font-[500] mt-2">
              Affordable Prices
            </p>
            <p className="text-center text-black mt-2 ">
              Premium products without breaking the bank.
            </p>
          </div>
          <div className="h-auto w-[250px] bg-white shadow-lg px-8 ">
            <img className="h-44 w-auto object-cover" src={image5} alt="" />
            <p className="text-center text-[#ff2020] text-[20px] font-[500] mt-2">
              Fast Delivery
            </p>
            <p className="text-center text-black mt-2 ">
              Get what you need when you need it.
            </p>
          </div>
          <div className="h-auto w-[250px] bg-white shadow-lg px-8 ">
            <img className="h-44 w-auto object-cover" src={image6} alt="" />
            <p className="text-center text-[#ff2020] text-[20px] font-[500] mt-2">
              Exceptional Support
            </p>
            <p className="text-center text-black mt-2 ">
              We provide excelent customer suppor. We are here to assist you
              24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
