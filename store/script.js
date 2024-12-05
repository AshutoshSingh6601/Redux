import CartItemReducer from "./CartItemReducer";
import WishListReducer from "./WishListReducer";
import ProductsListReducer from "./ProductsListReducer";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "./middleware/api";

export const store = configureStore({
  reducer: {
    product: ProductsListReducer,
    cartItem: CartItemReducer,
    wishList: WishListReducer,
  },
  middleware: ()=> [apiMiddleware, ],
});
