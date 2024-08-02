import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { playTrack } from "../../api/api";
import axios from "axios";

export const AsyncCurrentPlayer = createAsyncThunk(
    "player/playTrack",
    async ({ trackUri, userAccessToken }:any, { rejectWithValue }) => { 
        try {
            const res = await playTrack(trackUri, userAccessToken);
            console.log('API Response:', res); 
            return res;
        } catch (err) {
            console.log(err);
            if (axios.isAxiosError(err) && err.response) {
                return rejectWithValue(err.response.data.message || 'Something went wrong');
            }
            return rejectWithValue('Something went wrong');
        }
    }
);

const PlayerSlice = createSlice({
    name: "PlayerSlice",
    initialState: {
        player: null,
        currentTrack: null,
        isPaused: true,
        isActive: false,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AsyncCurrentPlayer.pending, (state) => {
                state.loading = true;
            })
            .addCase(AsyncCurrentPlayer.fulfilled, (state, action) => {
                state.player = action.payload; 
                state.currentTrack = action.payload.track; 
                state.isPaused = false; 
                state.isActive = true; 
            })
            .addCase(AsyncCurrentPlayer.rejected, (state) => {
                state.loading = false; 
            });
    }
});

export default PlayerSlice.reducer;