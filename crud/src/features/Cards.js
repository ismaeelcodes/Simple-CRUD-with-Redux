import { createSlice } from "@reduxjs/toolkit";
import { registerCarsData } from '../DummyData'


const initialState = { value: registerCarsData }

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
      addCard: (state, action) => {
       state.value.push(action.payload)
      },      
      deleteCard: (state, action) => {
        state.value = state.value.filter((car) => car.id !== action.payload.id)
      },
      updateCard: (state, action) => {
        const { id, make, model, registrationNumber } = action.payload;
        const cardIndex = state.value.findIndex((card) => card.id === id);
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

export const { addCard, deleteCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;