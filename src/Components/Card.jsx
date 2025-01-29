import React from "react";
import { useRef } from "react";
const Card = () => {
  const carouselRef = useRef(null);
  const productRef = useRef(null);
  const cards = [
    {
      id: "1",
      title: "Titan ",
      discription: "$50",
      imgsrc:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "1",
      title: "Saphie",
      discription: "$20",
      imgsrc:
        "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "1",
      title: "Rayband",
      discription: "$10",
      imgsrc:
        "https://images.pexels.com/photos/1532244/pexels-photo-1532244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "1",
      title: "Levis",
      discription: "$20",
      imgsrc:
        "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "1",
      title: "Gucci handbag",
      discription: "$90",
      imgsrc:
        "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      id: "1",
      title: "Saphie",
      discription: "$20",
      imgsrc:
        "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const productCards = [
    {
      id: "1",
      title: "Alison Jacks ",
      discription: "$50",
      imgsrc:
        "https://cdn.pixabay.com/photo/2017/09/29/15/42/fashion-2799476_960_720.jpg",
    },
    {
      id: "1",
      title: "Saphie",
      discription: "$20",
      imgsrc:
        "https://media.istockphoto.com/id/1278802435/photo/sweater-yellow-color-isolated-on-white-trendy-womens-clothing-knitted-apparel.jpg?s=2048x2048&w=is&k=20&c=N8-8e8vvCTL_4IFVwtqGjOdP_G94cJH1HRzKm4xN_8U=",
    },
    {
      id: "1",
      title: "Denim",
      discription: "$10",
      imgsrc:
        "https://cdn.pixabay.com/photo/2021/12/23/16/47/people-6889599_960_720.jpg",
    },
    {
      id: "1",
      title: "X-mas Sweater",
      discription: "$20",
      imgsrc:
        "https://cdn.pixabay.com/photo/2023/12/08/07/27/woman-8437007_1280.jpg",
    },
    {
      id: "1",
      title: "Saphies",
      discription: "$90",
      imgsrc:
        "https://cdn.pixabay.com/photo/2023/09/02/11/53/woman-8228748_1280.jpg",
    },
  ];

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -400,
      behaviour: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 400,
      behaviour: "smooth",
    });
  };

  const scrollLeft2 = () => {
    productRef.current.scrollBy({
      left: -400,
      behaviour: "smooth",
    });
  };

  const scrollRight2 = () => {
    productRef.current.scrollBy({
      left: 400,
      behaviour: "smooth",
    });
  };

  return (
    <>
      {/* fasion and gadgetscards */}
      <div className="flex flex-wrap justify-evenly gap-x-2">
        <div>
          <div className=" relative overflow-hidden w-[350px] h-80  hover:cursor-pointer   mt-[50px] ">
            <img
              className=" h-full w-full object-cover "
              src="https://images.pexels.com/photos/5717886/pexels-photo-5717886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center  ">
              <h3 className="  text-white text-[25px] font-[500] hover:text-[#ff2020] ">
                Women's fashion
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className=" relative overflow-hidden w-[350px] h-80  hover:cursor-pointer  mt-[50px] ">
            <img
              className=" h-full w-full object-cover"
              src="https://images.pexels.com/photos/8346043/pexels-photo-8346043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h3 className="  text-white text-[25px] font-[500] hover:text-[#ff2020] ">
                Men's fashion
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div className=" relative overflow-hidden w-[350px] h-80  hover:cursor-pointer  mt-[50px] ">
            <img
              className=" h-full w-full object-cover "
              src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center   ">
              <h3 className="  text-white text-[25px] font-[500] hover:text-[#ff2020] align-bottom">
                Gadgets
              </h3>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-[35px] font-[500] text-center mt-20 ">
        You May Like
      </h1>

      {/* collection cards */}

      <div
        id="card-section"
        className="w-full  mx-auto mt-10 h-auto max-w-screen-lg"
      >
        <div
          ref={carouselRef}
          id="cards"
          className="flex overflow-x-scroll  scrollbar-hide space-x-10"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[300px] hover:text-[#ff2020] bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={card.imgsrc}
                className="min-w-full h-[250px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-center">{card.discription}</p>{" "}
              </div>
            </div>
          ))}
          <button
            onClick={scrollLeft}
            className="absolute left-2  transform -translate-y-1/2 bg-slate-200 text-black text-[30px] p-3 rounded-xl shadow-md hover:bg-gray-700 hover:text-white"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-2  transform -translate-y-1/2 bg-slate-200 text-black text-[30px] p-3 rounded-xl shadow-md hover:bg-gray-700 hover:text-white"
          >
            &#8594;
          </button>
        </div>
      </div>
      <h1 className="text-[35px] font-[500] text-center mt-20 ">
        New Arrivels
      </h1>

      {/* New arrivals section */}

      <div
        id="card-section"
        className="w-full  mx-auto mt-10 h-auto max-w-[85%]"
      >
        <div
          ref={productRef}
          id="cards"
          className="flex overflow-x-scroll  scrollbar-hide space-x-10"
        >
          {productCards.map((card) => (
            <div
              key={card.id}
              className="min-w-[300px] hover:text-[#ff2020] bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300"
            >
              <img
                src={card.imgsrc}
                className="min-w-full h-[250px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-center">{card.discription}</p>{" "}
              </div>
            </div>
          ))}
          <button
            onClick={scrollLeft2}
            className="absolute left-2  transform -translate-y-1/2 bg-slate-200 text-black text-[30px] p-3 rounded-xl shadow-md hover:bg-gray-700 hover:text-white"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight2}
            className="absolute right-2  transform -translate-y-1/2 bg-slate-200 text-black text-[30px] p-3 rounded-xl shadow-md hover:bg-gray-700 hover:text-white"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
