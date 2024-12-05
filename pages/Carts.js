import React from "react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { onCartLoading } from "../store/CartItemReducer";

const Carts = ({cardWish}) => {
  // let CartItemCount = useSelector((state) => state.cartItem);
  let WishListCount = useSelector((state) => state.wishList);
  // const location = useLocation()
  // let productList = location.state
  
  let CartItemCount = useSelector(({cartItem, product}) => {
    return cartItem.list.map(({productId, quantity})=>{
      const productInCart = product.list.find((product) => product.id === productId)
      return {...productInCart, quantity}
    })
  });
  
  let cartLoading = useSelector(onCartLoading);
  let cartError = useSelector((state) => state.cartItem.error);

console.log(CartItemCount)

  let cartOrWishList = cardWish === 'shop' ? CartItemCount : WishListCount

  return (
    <div>
      <h2 className="font-bold text-center p-7 text-xl">{cardWish === 'shop' ? 'Items in Your Cart' : 'Your Wish List'}</h2>
      <div className={`max-[550px]:hidden grid grid-cols-7 px-5 py-2 font-semibold border-b border-[#898989] gap-4 ${cardWish === 'wish' ? 'hidden' : ''} `}>
        <div className="col-span-4">Item</div>
        <div className="">Price</div>
        <div className="">Quantity</div>
        <div className="">Total</div>
      </div>
      {cartLoading ? <h1 className="text-center text-2xl mt-5 font-bold">Loading...</h1> : cartError ? <h2 className="text-center text-xl mt-5 font-bold">{cartError}</h2> :
<div className="">

  {cartOrWishList.map(
    ({ id, quantity, image, price, rating, title }) => (
      <Cart
        key={id}
        cardWish={cardWish}
        productId={id}
        title={title}
        price={price}
        imageUrl={image}
        rating={rating.rate}
        quantity={quantity}
      />
    )
  )}
</div>
      }

{
  !cartLoading && !cartError &&
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
}
    </div>
  );
};

export default Carts;
