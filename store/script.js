import CartItemReducer from "./CartItemReducer";
import WishListReducer from "./WishListReducer";
import ProductsListReducer from "./ProductsListReducer";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "./middleware/api";
import { func } from "./middleware/func";

export const store = configureStore({
  reducer: {
    product: ProductsListReducer,
    cartItem: CartItemReducer,
    wishList: WishListReducer,
  },
  middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware, apiMiddleware, func],
});

// hame hamesha middleware ko ek callback function bnana hota hai otherwise if we create as an blank [] the it will overwrite the 'getDefaultMiddleware' as a blank 'arrar' thats why we have create one callback function.