import { configureStore } from "@reduxjs/toolkit";
import papersReducer from "./paper";
const store = configureStore({
  reducer: {
    papers: papersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
