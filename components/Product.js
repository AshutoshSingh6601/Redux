import { useDispatch } from "react-redux";
import { addCartItem } from "../store/CartItemReducer";

import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { AddToWishList, RemoveFromWishList } from "../store/WishListReducer";

export default function Product({ productId, title, rating, price, imageUrl }) {
  let dispatch = useDispatch();

  const [wishList, setWishList] = useState(false);


  return (
    <div className="product">
      <div className="product-image relative">
        <div className="absolute right-0" onClick={!wishList ? ()=>dispatch(AddToWishList({ productId, title, rating, price, imageUrl })) : ()=>dispatch(RemoveFromWishList({ productId, title, rating, price, imageUrl }))}>
          {wishList ? (
            <IoMdHeart onClick={()=>setWishList(false)} className="text-red-500 text-xl" />
          ) : (
            <IoIosHeartEmpty onClick={()=>setWishList(true)} className="text-xl" />
          )}
        </div>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a className="font-bold" href="#">
            {title}
          </a>
        </h3>
      </div>
      <div className="price-rating-container pt-4 pb-3">
        <p className="rating">{rating} ★ ★ ★ ★</p>
        <p className="price">₹{(84.36 * price).toFixed(2)}</p>
      </div>
      <div className="cta-container">
        <button
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded border border-[#898989] "
          onClick={() =>
            dispatch(addCartItem({ productId, title, rating, price, imageUrl }))
          }
        >
          Add to Cart
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded border border-[#898989] ">
          Buy Now
        </button>
      </div>
    </div>
  );
}
