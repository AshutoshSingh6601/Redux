import CartItemReducer from "./CartItemReducer";
import WishListReducer from "./WishListReducer";
import ProductsListReducer from "./ProductsListReducer";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({ reducer: {
  product: ProductsListReducer,
  cartItem: CartItemReducer,
  wishList: WishListReducer,
} })