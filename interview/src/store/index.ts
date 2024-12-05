import { configureStore } from "@reduxjs/toolkit";

import questionBank from './questionBank'
const store = configureStore({
    reducer:{
        questionBank
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store