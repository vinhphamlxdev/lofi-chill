import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    mode: "day",
    rainMode: "",
    mood: "chill",
    Playing: false,
    valueVolume: 50,
    rainValueVolume: 0,
    user: null,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleRainStatus: (state, action) => {
      state.rainMode = action.payload;
    },
    setMood: (state, action) => {
      state.mood = action.payload;
    },
    setPlaying: (state, action) => {
      state.Playing = action.payload;
    },
    setValueVolume: (state, action) => {
      state.valueVolume = action.payload;
    },
    setValueVolumeRain: (state, action) => {
      state.rainValueVolume = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const {
  toggleDarkMode,
  toggleRainStatus,
  setMood,
  setPlaying,
  setValueVolume,
  setValueVolumeRain,
  setUser,
} = globalSlice.actions;
export default globalSlice.reducer;
