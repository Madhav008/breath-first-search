import { createSlice } from '@reduxjs/toolkit'

const emailSlice = createSlice({
    name: 'emailFilled',
    initialState: '',
    reducers: {
        setEmail(state, action) {
            state = action.payload
            return state;
        },
    },
})

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;