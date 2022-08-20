import { createSlice } from '@reduxjs/toolkit'

const signUpModalSlice = createSlice({
    name: 'signUpModal',
    initialState: false,
    reducers: {
        show(state, action) {
            return !state
        },
    },
})

export const { show } = signUpModalSlice.actions;
export default signUpModalSlice.reducer;