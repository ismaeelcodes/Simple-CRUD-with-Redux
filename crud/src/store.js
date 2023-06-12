import { configureStore } from '@reduxjs/toolkit'
import usersReducer from "./features/Credentials"
import cardsReducer from './features/Cards'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cards: cardsReducer,
  },
})