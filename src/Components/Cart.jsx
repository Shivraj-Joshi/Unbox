import React, { useContext } from "react";
import { cartContext } from "../Context/cartContext";

const Cart = () => {
  const { items, addToCart, removeFromCart } = useContext(cartContext);
  return (
    <div className="cart items ml-16">
      <h2 className="text-center text-[28px] text-gray-600 mt-12 font-bold">
        Your Cart
      </h2>
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="cart-item w-[80%] mt-10 border shadow-md flex items-center gap-4 mb-8"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[250px]  object-cover h-[250px]"
            />
            <h3 className="text-[25px] ">{item.name}</h3>
            <p className="text-[25px] ">{item.price}</p>
            <p className="text-[25px] ">quantity:{item.quantity}</p>
            <button
              className="text-[35px] hover:text-[#ff2020]"
              onClick={() => addToCart(item)}
            >
              +
            </button>
            <button
              className="text-[35px] hover:text-[#ff2020]"
              onClick={() => removeFromCart(item)}
            >
              -
            </button>

            <button
              onClick={() => removeFromCart(item)}
              className=" text-[28px] text-black hover:text-[#ff2020]  px-4 py-2   "
            >
              <i class="ri-delete-bin-6-line"></i>
            </button>
          </div>
        ))
      ) : (
        <p className="text-[50px] text-[#ff2020] text-center mb-24">
          Your Cart Is Empty.
        </p>
      )}
    </div>
  );
};

export default Cart;
