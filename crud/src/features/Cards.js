import { createSlice } from "@reduxjs/toolkit";
// importing Dummy Data
import { registerCarsData } from '../DummyData'

// initializing state
const initialState = { value: registerCarsData }

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
      // Pushes the object that we recieve from the Card Creator to the state Dummy Data
      addCard: (state, action) => {
       state.value.push(action.payload)
      },
      // Filters out every car except for the car in our state which matches the id of the payload id and deletes it.     
      deleteCard: (state, action) => {
        state.value = state.value.filter((car) => car.id !== action.payload.id)
      },
      // Destructures id, make, model and regNo from the object we recieve from our payload when user clicks on update
      updateCard: (state, action) => {
        const { id, make, model, registrationNumber } = action.payload;
        // Finds the Index of the Card using .findIndex which matches to our destructed id and saves it in cardIndex
        const cardIndex = state.value.findIndex((card) => card.id === id);
        // checks if Card Index is not equal to -1 and if it isn't, updates our existing Card
        if (cardIndex !== -1) {
          state.value[cardIndex] = {
            ...state.value[cardIndex],
            make,
            model,
            registrationNumber,
          };
        }
      },
    }
})

// exporting reducers
export const { addCard, deleteCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;