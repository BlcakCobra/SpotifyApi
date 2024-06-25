import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchForItem } from "../../api/api";

const AsyncSearchItem = createAsyncThunk(
    "AsyncSearchItem",
    async(search:string) =>{
        const res = await searchForItem(search)
        return res
    }
)
const searchItem = createSlice({
    name:"searchItem",
    initialState:{
        search:[],
        loading:false
    },
    reducers:{

    },
    extraReducers:(build) => {
        build
        .addCase(AsyncSearchItem.pending, (state) => {
            state.loading = true;
          })
          .addCase(AsyncSearchItem.fulfilled, (state, action) => {
            state.loading = false;
            state.search = action.payload;
          })
          .addCase(AsyncSearchItem.rejected, (state) => {
            state.loading = false;
          })
    }
})
export default searchItem.reducer