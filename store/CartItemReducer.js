import { createSlice } from "@reduxjs/toolkit";

const findExistingIndex = (state, action) => state.findIndex((item)=> item.productId === action.payload.productId)

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCartItem(state, action){
      let existingIndex = findExistingIndex(state, action)
      if(existingIndex !== -1){
        state[existingIndex].quantity += 1
      }else{
        state.push({...action.payload, quantity: 1})
      }
    },
    removeCartItem(state, action){
      let existingIndex = findExistingIndex(state, action)
      state.splice(existingIndex, 1)
    },
    increaseCartQuantity(state, action){
      let existingIndex = findExistingIndex(state, action)
      state[existingIndex].quantity += 1
    },
    decreaseCartQuantity(state, action){
      let existingIndex = findExistingIndex(state, action)
      state[existingIndex].quantity -= 1
      if(state[existingIndex].quantity === 0){
        state.splice(existingIndex, 1)
      }
    },
  }
})

export const { addCartItem, removeCartItem, increaseCartQuantity, decreaseCartQuantity } = cartSlice.actions

export default cartSlice.reducer
