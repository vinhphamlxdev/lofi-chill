import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    mode: "day",
    rainMode: "",
    mood: "chill",
    Playing: false,
  },
  reducers: {
    toggleDarkMode: (state, action) => ({
      ...state,
      mode: action.payload,
    }),
    toggleRainStatus: (state, action) => ({
      ...state,
      rainMode: action.payload,
    }),
    setMood: (state, action) => ({
      ...state,
      mood: action.payload,
    }),
    setPlaying: (state, action) => ({
      ...state,
      Playing: action.payload,
    }),
  },
});
export const { toggleDarkMode, toggleRainStatus, setMood, setPlaying } =
  globalSlice.actions;
export default globalSlice.reducer;
