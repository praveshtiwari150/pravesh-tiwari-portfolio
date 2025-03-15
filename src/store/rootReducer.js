import { combineReducers } from "@reduxjs/toolkit/react";
import  themeReducer from "./slice/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer
})

export default rootReducer;