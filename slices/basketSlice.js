import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        addtoBasket: (state,action) => {},
        removeFromBasket: (state,action) => {},
    },
});

export const {addtoBasket, removeFromBasket} = basketSlice.actions;

// selectors - how we pull info from global store slice
export const selectItems = (state) =>state.basket.items;

export default basketSlice.reducer;