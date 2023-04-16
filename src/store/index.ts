import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { containerReducer } from './modules/container'

const rootReducer = combineReducers({
  container: containerReducer
})

const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
