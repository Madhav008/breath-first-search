import { configureStore } from "@reduxjs/toolkit"
import loginModalReducer from "./loginModalSlice"
import emailReducer from './emailSlice';
import signupModalReducer from "./signupModalSlice";
const store = configureStore({
    reducer: {
        loginModal: loginModalReducer,
        signUpModal:signupModalReducer,
        email: emailReducer
    }
})

export default store