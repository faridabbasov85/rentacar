import { createSlice } from '@reduxjs/toolkit'
import { deleteProducts, getProducts, postProducts } from '../thunks/products/thunk'
// import { deleteCarts, getCarts, postCarts } from '../thunks/cart/cart'


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    wishlist: [],
  },
  reducers: {
    // sortByLower: (state, action) => {
    //   state.products = state.products.sort((a, b) => a.price - b.price)
    // },
    // sortByHiger: (state, action) => {
    //   state.products = state.products.sort((a, b) => b.price - a.price)
    // },
    // searchByName: (state, action) => {
    //   const query = action.payload.toLowerCase()
    //   state.products = state.products.filter(item => item.title.toLowerCase().startsWith(query))
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
      .addCase(postProducts.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.products = state.products.filter(item => item._id != action.payload)
      })
  }
})


export default productsSlice.reducer