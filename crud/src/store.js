import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./features/Credentials"
import cardsReducer from './features/Cards'

export const store = configureStore({
  reducer: {
    // storing our Reducers in the storage.
    users: usersReducer,
    cards: cardsReducer,
  },
})