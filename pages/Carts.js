import React from "react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Carts = ({cardWish}) => {
  let CartItemCount = useSelector((state) => state.cartItem);
  let WishListCount = useSelector((state) => state.wishList);
  // const location = useLocation()
  // let productList = location.state

  let a = cardWish === 'shop' ? CartItemCount : WishListCount

  return (
    <div>
      <h2 className="font-bold text-center p-7 text-xl">{cardWish === 'shop' ? 'Items in Your Cart' : 'Your Wish List'}</h2>
      <div className={`max-[550px]:hidden grid grid-cols-7 px-5 py-2 font-semibold border-b border-[#898989] gap-4 ${cardWish === 'wish' ? 'hidden' : ''} `}>
        <div className="col-span-4">Item</div>
        <div className="">Price</div>
        <div className="">Quantity</div>
        <div className="">Total</div>
      </div>
      {a.map(
        ({ productId, quantity, imageUrl, price, rating, title }) => (
          <Cart
            key={productId}
            cardWish={cardWish}
            productId={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
            quantity={quantity}
          />
        )
      )}

      <div className={`grid grid-cols-7 px-5 py-2 font-semibold gap-4 ${cardWish === 'wish' ? 'hidden' : ''}`}>
        <div className="max-[550px]:col-span-3 col-span-4">Total</div>
        <div className=""></div>
        <div className=""></div>
        <div className="">
          $
          {CartItemCount.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.quantity * currentValue.price,
            0
          ).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Carts;
