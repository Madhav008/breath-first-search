import { configureStore } from "@reduxjs/toolkit"
import loginModalReducer from "./loginModalSlice"

const store = configureStore({
    reducer: {
        loginModal: loginModalReducer
    }
})

export default store