import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const cartSlice = createSlice({
    name: '',
    initialState: undefined,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})

export const { setCartGlobal } = cartSlice.actions;

export const getAllProductCart = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    return axios.get(URL, getConfig())
        .then(res => dispatch(setCartGlobal(res.data.data.cart.products)))
        .catch(err => console.log(err.data))
}

export default cartSlice.reducer;