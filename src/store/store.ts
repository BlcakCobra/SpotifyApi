import { configureStore } from "@reduxjs/toolkit";
import searchItem from "./Slices/SearchSlice"
import PlayerSlice from "./Slices/PlayerSlice";


export const store = configureStore({
    reducer:{
        searchItem:searchItem,
        PlayerSlice:PlayerSlice
    }       
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;