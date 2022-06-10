import { combineReducers } from "redux";
import darkModeSlice from "./darkMode/darkModeSlice";
export const reducer = combineReducers({
  darkMode: darkModeSlice,
});
