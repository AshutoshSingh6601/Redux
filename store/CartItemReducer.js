import { produce } from "immer";

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
const CartItemReducer = (initialState = [], action) => {

  return produce(initialState, (state)=>{
    const existingIndex = state.findIndex((state)=>state.productId === action.payload.productId)
    switch (action.type) {
      case CART_ADD_ITEM:
        if(existingIndex !== -1){
          console.log(existingIndex, '=======')
          state[existingIndex].quantity += 1
          return state
        }
        state.push({...action.payload, quantity: 1})
        return state

      case CART_REMOVE_ITEM:
        state.splice(existingIndex, 1)
        return state
      case CART_INCREASE_QUANTITY:
        if(existingIndex !== -1){
          state[existingIndex].quantity += 1
          return state
        }
        return 
      case CART_DECREASE_QUANTITY:
        state[existingIndex].quantity -= 1
        if(state[existingIndex].quantity === 0){
          state.splice(existingIndex, 1)
        }
        return state
  
      default:
        return state;
    }
  })

};

// let user = [{ name: 'Ashutosh', age: 23}, {name: 'Ashu', age: 24}]

// user[1].name = 'Shani'

// console.log(user.map((user, i)=> i === 1 ? {...user, name: 'Shani'} : user))

export default CartItemReducer;
