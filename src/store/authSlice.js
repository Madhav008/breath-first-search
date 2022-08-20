import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
    isVerify:false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const  user  = action.payload;
            state.user = user;
            state.isAuth = true;
        },
        setVerify: (state, action) => {
            const { token } = action.payload;
            if(token){
                state.isVerify = true;
            }
        },
    },
});

export const { setAuth, setVerify } = authSlice.actions;

export default authSlice.reducer;