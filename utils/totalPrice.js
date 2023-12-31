import { createSlice } from "@reduxjs/toolkit";

const totalPrice=createSlice({
    name:'totalPrice',
    initialState:{
        total:0,
        counts:{},
    },
    reducers:{
        addPrice:(state,action)=>{
            state.total=state.total+action.payload;
        },
        decreasePrice:(state,action)=>{
            state.total=state.total-action.payload;
        },
        setCount: (state, action) => {
            const { itemId, count } = action.payload;
            state.counts[itemId] = count;
          },
    },
})

export const {addPrice,decreasePrice,intialTotal,setCount}=totalPrice.actions;
export default totalPrice.reducer;
