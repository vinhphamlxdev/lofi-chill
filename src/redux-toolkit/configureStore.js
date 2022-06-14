import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeSlice from "./darkmode/darkModeSlice";
const reducer = combineReducers({
  darkMode: darkModeSlice,
});
const store = configureStore({
  reducer: reducer,
});
export default store;
