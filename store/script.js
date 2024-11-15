import { combineReducers, createStore } from "redux";
import { ProductList } from "./ProductList";
import CartItemReducer, { addCartItem, CART_ADD_ITEM, CART_DECREASE_QUANTITY, CART_INCREASE_QUANTITY, CART_REMOVE_ITEM, CartActionCreator } from "./CartItemReducer";
import WishListReducer, { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "./WishListReducer";
import ProductsListReducer from "./ProductsListReducer";

let reducer = combineReducers({
  product: ProductsListReducer,
  cartItem: CartItemReducer,
  wishList: WishListReducer,
})

export let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 2, quantity: 1 } });
// store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 6, quantity: 3 } });
// store.dispatch(addCartItem(11));
// store.dispatch(CartActionCreator(CART_ADD_ITEM, {id:11, count:5}));
// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 10, quantity: 5 },
// });
// store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 6 } });
// store.dispatch({ type: CART_INCREASE_QUANTITY, payload: { productId: 10 } });
// store.dispatch({ type: CART_DECREASE_QUANTITY, payload: { productId: 10 } });

// store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId:10}})
// store.dispatch({type: WISHLIST_ADD_ITEM, payload: {productId:5}})
// store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId:10}})

















// store.dispatch({ type: "post/increment" });
// store.dispatch({ type: "post/decrement" });
// store.dispatch({ type: "post/incrementBy", payload: 10 });
// store.dispatch({ type: "post/decrementBy", payload: 5 });

// import { createStore } from "redux";

// let showCount = document.querySelector(".numberOfCom");
// let btnCount = document.querySelector(".btnCount");

// showCount.innerHTML = 0;

// let InceaseCountNum = "increaseCount";

// function InceaseCount(state = parseInt(showCount.innerHTML), action) {
//   if (action.type == InceaseCountNum) {
//     return (showCount.innerHTML = state + 1);
//   }
//   return state;
// }

// let store = createStore(InceaseCount);

// store.subscribe(()=>{
//   console.log(store.getState())
// })

// btnCount.addEventListener('click', ()=>{
//   store.dispatch({ type: InceaseCountNum });
// })
