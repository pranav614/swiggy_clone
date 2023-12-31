import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.cartItems.push(action.payload);
        },
        removeItem:(state,action)=>{
           state.cartItems=state.cartItems.filter((res)=> res.arrayRes.card.info.id !== action.payload);
        },
        clearItem:(state)=>{
            state.cartItems.length=0;
        },
},
});

export const{addItem,removeItem,clearItem}=cartSlice.actions;

export default cartSlice.reducer;
