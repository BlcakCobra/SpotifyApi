import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchForItem } from "../../api/api";
import { AxiosResponse } from "axios";
import { AsyncSearchIteminitialState,  SpotifyData } from "../../types/SearchForItemType";
import axios from "axios";

export const AsyncSearchItem = createAsyncThunk<SpotifyData, string, { rejectValue: string }>(
  "AsyncSearchItem",
  async (search, { rejectWithValue }) => {
    try {
      const res = await searchForItem(search);
      console.log('API Response:', res); 
      return res;
    } catch (error) {
      console.error("Error fetching data from Spotify API", error);
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message || 'Something went wrong');
      }
      return rejectWithValue('Something went wrong');
    }
  }
);

const initialState: AsyncSearchIteminitialState = {
  searchList: null,
  search: "",
  loading: false,
  error: "",
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
        console.log('Loading started');
      })
      .addCase(AsyncSearchItem.fulfilled, (state, action: PayloadAction<SpotifyData>) => {
        state.loading = false;
        state.searchList = action.payload;
        console.log('Data fetched successfully', action.payload);
      })
      .addCase(AsyncSearchItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        console.log('Error fetching data', action.payload);
      });
  },
});

export default searchItem.reducer;
export const { SearchSomething } = searchItem.actions;