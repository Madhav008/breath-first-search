import { configureStore } from "@reduxjs/toolkit"
import loginModalReducer from "./loginModalSlice"
import emailReducer from './emailSlice';
import signupModalReducer from "./signupModalSlice";
import authReducer from "./authSlice";
const store = configureStore({
    reducer: {
        loginModal: loginModalReducer,
        signUpModal:signupModalReducer,
        email: emailReducer,
        auth:authReducer
    }
})

export default store