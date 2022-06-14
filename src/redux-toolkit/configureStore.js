import { configureStore, combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";
const reducer = combineReducers({
  global: globalSlice,
});
const store = configureStore({
  reducer: reducer,
});
export default store;
