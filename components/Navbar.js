import React, { useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoIosHeartEmpty } from "react-icons/io";
import { isError, isProducts, productList } from "../store/ProductsListReducer";
import { cartData, cartError, cartLoading } from "../store/CartItemReducer";
import { fetchData } from "../store/middleware/api";

const Navbar = ({setCardWish}) => {
  let dispatch = useDispatch()
  let CartItemCount = useSelector((state) => state.cartItem.list);
  let WishListCount = useSelector((state) => state.wishList);
  let TotalCount = CartItemCount.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  useEffect(() => {

    dispatch({type: 'api/makeCall', payload: {
      url: 'products',
      onLoad: isProducts.type,
      // onSuccess: productList,  //--> if we do without .type it will not shows this in reduxToolKit
      onSuccess: productList.type,
      onError: isError,
    }})   // --> we can do this way or otherwise as the below type

    dispatch(fetchData({
      url: 'carts/5',
      onLoad: cartLoading.type,
      onSuccess: cartData.type,
      onError: cartError,
    }))

  }, [])

  return (
    <div className="flex items-center justify-between p-4 text-2xl border-b border-[#898989] header">
      <Link to="/" className="font-bold">
        Shopee
      </Link>
      <div className="flex gap-5">
        <Link to="/cart" state={WishListCount} onClick={()=>setCardWish('wish')}>
          <div className="relative">
            <IoIosHeartEmpty
              className="text-xl"
            />
            <div className="absolute bg-black -top-[14px] left-11 rounded-full px-1 text-white text-xs">
              {TotalCount}
            </div>
          </div>
        </Link>
        <Link to='/cart' state={CartItemCount} onClick={()=>setCardWish('shop')}>
        <div className="relative">
          <MdShoppingCart />
          <div className="absolute bg-black -top-[10px] -left-6 rounded-full px-1 text-white text-xs">
            {WishListCount.length}
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
