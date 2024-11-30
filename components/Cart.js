import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../store/CartItemReducer";

const Cart = ({ productId, quantity, imageUrl, price, rating, title, cardWish }) => {
  const dispatch = useDispatch();

  return (
    <div className="max-[550px]:block grid grid-cols-7 items-center p-5 gap-4 border-b border-[#898989]">
      <div className="flex gap-2 col-span-4">
        <img src={imageUrl} className="w-14" alt={title} />
        <div className="">
          <h3 className="font-bold">{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className={`max-[550px]:inline ${cardWish === 'wish' ? 'min-[5px]:hidden' : ''}`}>${price}</div>
      <div className={`max-[550px]:inline-block max-[550px]:me-5 max-[550px]:mt-5 flex flex-nowrap items-center gap-2 ${cardWish === 'wish' ? 'min-[5px]:hidden' : ''}`}>
        <button
          onClick={() => dispatch(decreaseCartQuantity({productId}))}
          className="bg-gray-100 hover:bg-gray-200 p-1 px-2 rounded border border-[#898989] "
        >
          -
        </button>
        <span className="max-[550px]:mx-2">{quantity}</span>
        <button
          onClick={() => dispatch(increaseCartQuantity({productId}))}
          className="bg-gray-100 hover:bg-gray-200 p-1 px-2 rounded border border-[#898989] "
        >
          +
        </button>
      </div>
      <div className={`max-[550px]:inline ${cardWish === 'wish' ? 'min-[5px]:hidden' : ''} `}>${(quantity * price).toFixed(2)}</div>
    </div>
  );
};

export default Cart;
