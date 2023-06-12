import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
   name: '',
   pass: '',
},
}

export const credentialSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.name = action.payload.name
            state.value.pass = action.payload.pass
        }
    }
})

export const { addUser } = credentialSlice.actions;
export default credentialSlice.reducer;