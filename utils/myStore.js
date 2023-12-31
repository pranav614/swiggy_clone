import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import totalPrice from "./totalPrice";

const myStore=configureStore({

reducer:{
    cart:cartSlice,
    total:totalPrice,
}

})

export default myStore;