import { createSlice } from "@reduxjs/toolkit";
export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    mode: "day",
    rainMode: "",
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
  },
});
export const { toggleDarkMode, toggleRainStatus } = darkModeSlice.actions;
export default darkModeSlice.reducer;
