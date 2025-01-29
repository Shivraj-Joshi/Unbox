import React, { useContext } from "react";
import { cartContext } from "../Context/cartContext";

const Product = () => {
  const { addToCart } = useContext(cartContext);

  const menProducts = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 100",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 60",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$  80",
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 40",
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 60",
    },
    {
      id: "6",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$  10",
    },
    {
      id: "7",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 50",
    },
    {
      id: "8",
      image:
        "https://images.pexels.com/photos/3453083/pexels-photo-3453083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 20",
    },
  ];

  const womenProducts = [
    {
      id: "9",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 60",
    },
    {
      id: "10",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 80",
    },
    {
      id: "11",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 20",
    },
    {
      id: "12",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 40",
    },
    {
      id: "13",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 70",
    },
    {
      id: "14",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 10",
    },
    {
      id: "15",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 50",
    },
    {
      id: "16",
      image:
        "https://images.pexels.com/photos/30416971/pexels-photo-30416971/free-photo-of-elegant-woman-in-pink-sheer-blouse-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 60",
    },
  ];

  const gadgets = [
    {
      id: "17",
      image:
        "https://images.pexels.com/photos/1093236/pexels-photo-1093236.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "product name",
      price: "$ 150",
    },
    {
      id: "18",
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 200",
    },
    {
      id: "19",
      image:
        "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 400",
    },
    {
      id: "20",
      image:
        "https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 205",
    },
    {
      id: "21",
      image:
        "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 800",
    },
    {
      id: "22",
      image:
        "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 500",
    },
    {
      id: "23",
      image: "https://images.pexels.com/photos/19671/pexels-photo.jpg",
      name: "product name",
      price: "$ 400",
    },
    {
      id: "24",
      image:
        "https://images.pexels.com/photos/3697717/pexels-photo-3697717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "product name",
      price: "$ 900",
    },
  ];

  return (
    <div className="overflow-y-scroll ">
      <h1 className="ml-8 text-[28px] font-bold mt-12 mb-4">
        Tranding in Men's Fashion
      </h1>
      <div
        id="card-container"
        className=" w-full h-auto p-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  justify-center"
      >
        {menProducts.map((product) => (
          <div
            key={product.id}
            className="h-[350px] w-[250px] border overflow-hidden text-center  hover:shadow-lg "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover h-[250px]"
            />
            <p className="text-black font-bold text-[18px]">{product.name}</p>
            <p className="text-black font-bold text-[18px]">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="p-2 text-center  text-[18px] text-black hover:bg-[#ff2020] hover:text-white"
              // onClick={addToCart}
            >
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>

      <h1 className="ml-8 text-[28px] font-bold mt-12 mb-4">
        Tranding in Women's Fashion
      </h1>

      <div
        id="card-container"
        className=" w-full h-auto p-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  justify-center"
      >
        {womenProducts.map((product) => (
          <div
            key={product.id}
            className="h-[350px] w-[250px] border overflow-hidden text-center  hover:shadow-lg "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover h-[250px]"
            />
            <p className="text-black font-bold text-[18px]">{product.name}</p>
            <p className="text-black font-bold text-[18px]">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="p-2 text-center  text-[18px] text-black hover:bg-[#ff2020] hover:text-white"
              // onClick={addToCart}
            >
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>

      <h1 className="ml-8 text-[28px] font-bold mt-12 mb-4">
        Tranding Gadgets
      </h1>

      <div
        id="card-container"
        className=" w-full h-auto p-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6  justify-center"
      >
        {gadgets.map((product) => (
          <div
            key={product.id}
            className="h-[350px] w-[250px] border overflow-hidden text-center  hover:shadow-lg "
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover h-[250px]"
            />
            <p className="text-black font-bold text-[18px]">{product.name}</p>
            <p className="text-black font-bold text-[18px]">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="p-2 text-center  text-[18px] text-black hover:bg-[#ff2020] hover:text-white"
              // onClick={addToCart}
            >
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
