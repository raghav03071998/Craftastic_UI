import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import { useReducer } from "react";
export default configureStore({
    reducer:{
        cart: cartReducer
    }}
)