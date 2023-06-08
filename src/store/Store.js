import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/MessagesSlice"
const Store = configureStore({
    reducer : {
        messages : messageReducer,
    }
})
export default Store