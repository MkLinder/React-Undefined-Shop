import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../components/ProductCard/ProductCard';

interface ICartState {
    cart: IProduct[]
}

const initialState: ICartState = {
    cart: [],
}

export const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addProduct: (state, action) => {
            state.cart = [
                ...state.cart,
                action.payload
            ]
        },
        removeProduct: (state, action) => {
            const productToRemove = action.payload;
            const cartFiltred = state.cart.filter((product) => product.id !== productToRemove.id)

            state.cart = cartFiltred;
        }
    }
});

export const { addProduct, removeProduct } = cartSlice.actions