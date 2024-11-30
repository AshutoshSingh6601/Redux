import { createSlice } from "@reduxjs/toolkit"
import { ProductList } from "./ProductList"


const slice = createSlice({
    name: 'product',                    // --> "action creator"
    initialState: {
        loading: false,
        list: [],
        error: '',
    },                                  // --> "state"
    reducers: {                         // --> "Reducer"
        isProducts(state){
            state.loading = true
        },
        isError(state, action){
            state.loading = false
            state.error = action.payload || 'Something went wrong'
        },
        productList(state, action){     // --> the function name is "action type" 
            state.loading = false
            state.list =  action.payload
        },
    },
})

export const { productList, isProducts, isError } = slice.actions

export default slice.reducer