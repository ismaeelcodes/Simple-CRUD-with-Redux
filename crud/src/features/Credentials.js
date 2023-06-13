import { createSlice } from "@reduxjs/toolkit";

// Initializing our InitialState with a value object which contains 2 keys, name and pass.
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
        // sets the state to the payload recieved by the register form which can be logged into.
        addUser: (state, action) => {
            state.value.name = action.payload.name
            state.value.pass = action.payload.pass
        }
    }
})

// exporting our functions
export const { addUser } = credentialSlice.actions;
export default credentialSlice.reducer;