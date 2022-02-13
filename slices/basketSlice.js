import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers: {
        addToBasket: (state,action) => {
           state.items = [...state.items, action.payload] 
        },
        removeFromBasket: (state,action) => {
            const index = state.items.findIndex(basketItem=> basketItem.id === action.payload.id)
            
            let newBasket = [...state.items]

            if(index>=0) {
                // the item exists in the basket -> remove it
                newBasket.splice(index,1)
            }
            else{
                console.warn(`Cant remove product with id: ${action.payload.id}, because its not in the basket`)
            }

            state.items = newBasket
        },
    },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

// selectors - how we pull info from global store slice
export const selectItems = (state) =>state.basket.items;

export default basketSlice.reducer;