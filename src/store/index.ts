import { configureStore } from "@reduxjs/toolkit";
import recommendReducer from './modules/recommend'
import playerReducer from './modules/player'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
