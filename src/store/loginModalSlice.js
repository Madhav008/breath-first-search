import { createSlice } from '@reduxjs/toolkit'

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: false,
    reducers: {
        show(state, action) {
            return !state
        },

    },
})

export const { show } = loginModalSlice.actions;
export default loginModalSlice.reducer;