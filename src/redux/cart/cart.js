import {createSlice} from '@reduxjs/toolkit'

const items = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        itemsInCart: items
    },
    reducers: {
        setItemsIncart: (state, action) => {
            state.itemsInCart.push(action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.itemsInCart))
        },
        deleteItemsFromCart:(state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.itemsInCart))
        }
    }
})

export const { setItemsIncart, deleteItemsFromCart} = cartSlice.actions
export default cartSlice.reducer