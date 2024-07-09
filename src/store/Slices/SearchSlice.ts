import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchForItem } from "../../api/api";
import { AxiosResponse } from "axios";
import { AsyncSearchIteminitialState,  SpotifyData } from "../../types/SearchForItemType";




export const AsyncSearchItem = createAsyncThunk(
  "AsyncSearchItem",
  async (search: string) => {
    const res: AxiosResponse<any> = await searchForItem(search);
    console.log(res);
    return res.data;
  }
);

const initialState: AsyncSearchIteminitialState = {
  searchList: null,
  search: "",
  loading: false,
};

const searchItem = createSlice({
  name: "searchItem",
  initialState,
  reducers: {
    SearchSomething(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AsyncSearchItem.pending, (state) => {
        state.loading = true;
        state.searchList = null; 
      })
      .addCase(AsyncSearchItem.fulfilled, (state, action: PayloadAction<SpotifyData>) => {
        state.loading = false;
        state.searchList = action.payload;
      })
      .addCase(AsyncSearchItem.rejected, (state) => {
        state.loading = false;
        state.searchList = null; 
      });
  },
});

export default searchItem.reducer;
export const { SearchSomething } = searchItem.actions;