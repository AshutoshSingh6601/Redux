// Action Types
let CART_ADD_ITEM = "cart/addItem";
let CART_REMOVE_ITEM = "cart/removeItem";
let CART_INCREASE_QUANTITY = "cart/inceaseQuantity";
let CART_DECREASE_QUANTITY = "cart/deceaseQuantity";

// Action Creators
// export const CartActionCreator = (action, {id, count}) => {
//   return {type: action, payload: {productId: id, quantity: count}}
// }

export const addCartItem = (productData) => {
  return { type: CART_ADD_ITEM, payload: productData };
};

export const removeCartItem = (productId) => {
  return { type: CART_REMOVE_ITEM, payload: { productId } };
};

export const increaseCartQuantity = (productId) => {
  return { type: CART_INCREASE_QUANTITY, payload: {productId} };
};

export const decreaseCartQuantity = (productId) => {
  return { type: CART_DECREASE_QUANTITY, payload: {productId} };
};

// Reducer
const CartItemReducer = (state = [], action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      let existingItem = state.find(
        (cart) => cart.productId === action.payload.productId
      );
      return existingItem
        ? state.map((cartItem) =>
            cartItem.productId === existingItem.productId
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state, {...action.payload, quantity: 1}];
    case CART_REMOVE_ITEM:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );
    case CART_INCREASE_QUANTITY:
      return state.map((cartItem) => {
        return cartItem.productId === action.payload.productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    case CART_DECREASE_QUANTITY:
      return state
        .map((cartItem) => {
          return cartItem.productId === action.payload.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
};

export default CartItemReducer;
