// Action Type
let WISHLIST_ADD_ITEM = "wishList/addItem";
let WISHLIST_REMOVE_ITEM = "wishList/removeItem";

// Action Creator
export const AddToWishList = function(productId){
  return {type: WISHLIST_ADD_ITEM, payload: productId}
}

export const RemoveFromWishList = (productId) => {
  return {type: WISHLIST_REMOVE_ITEM, payload: {productId}}
}

// Reducer
const WishListReducer = (state = [], action) => {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];

    case WISHLIST_REMOVE_ITEM:
      return state.filter(
          (product) => product.productId !== action.payload.productId.productId
        )
      

    default:
      return state;
  }
};

export default WishListReducer;
