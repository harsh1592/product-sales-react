import Product from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
  },
})

export const { setProducts } = productSlice.actions

export const getProducts = (state: RootState) => state.products.products;

export default productSlice.reducer
