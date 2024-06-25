import { configureStore } from "@reduxjs/toolkit";
import searchItem from "./Slices/SearchSlice"
export const store = configureStore({
    reducer:{
        searchItem:searchItem
    }       
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;