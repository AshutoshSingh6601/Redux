import { createSlice } from "@reduxjs/toolkit";

const findExistingIndex = (state, action) => state.findIndex((item)=> item.productId === action.payload.productId)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    cartLoading(state){
      state.loading = true
    },
    cartError(state, action){
      state.loading = false
      state.error = action.payload || 'Something went wrong'
    },
    cartData(state, action){
      state.loading = false
      state.list = action.payload.products
    },
    addCartItem(state, action){
      state.loading = true
      let existingIndex = findExistingIndex(state.list, action)
      if(existingIndex !== -1){
        state.list[existingIndex].quantity += 1
      }else{
        state.list.push({...action.payload, quantity: 1})
      }
    },
    removeCartItem(state, action){
      let existingIndex = findExistingIndex(state.list, action)
      state.list.splice(existingIndex, 1)
    },
    increaseCartQuantity(state, action){
      let existingIndex = findExistingIndex(state.list, action)
      state.list[existingIndex].quantity += 1
    },
    decreaseCartQuantity(state, action){
      let existingIndex = findExistingIndex(state.list, action)
      state.list[existingIndex].quantity -= 1
      if(state.list[existingIndex].quantity === 0){
        state.list.splice(existingIndex, 1)
      }
    },
  }
})

// Thunk action creator
export const fetchCartData = ()=> (dispatch) => {
  dispatch(cartLoading())
  fetch("https://fakestoreapi.com/carts/5")
    .then((res) => res.json())
    .then((data) => dispatch(cartData(data)))
    .catch((err) => dispatch(cartError()));
}

export const { addCartItem, removeCartItem, increaseCartQuantity, decreaseCartQuantity, cartLoading, cartError, cartData } = cartSlice.actions

export const onCartLoading = (state) => state.cartItem.loading

export default cartSlice.reducer
