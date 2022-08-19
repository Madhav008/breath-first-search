import { configureStore } from "@reduxjs/toolkit"
import loginModalReducer from "./loginModalSlice"
import emailReducer from './emailSlice';
const store = configureStore({
    reducer: {
        loginModal: loginModalReducer,
        email: emailReducer
    }
})

export default store