"use client";
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { cart: [] },
    reducers: {
        setProducts: (state, action) => {
            state.cart.push(action.payload);
        },
        remove: (state, action) => {
            state.cart =  state.cart.filter((item) => item.id !== action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProducts, remove } = counterSlice.actions

export default counterSlice.reducer;