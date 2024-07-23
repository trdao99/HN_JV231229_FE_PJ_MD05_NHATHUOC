import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import AdminSlice from "./AdminSlice";
import AuthSlice from "./AuthSlice";
import userSilce from "./userSilce";

const rootReducers = combineReducers({
  category: categorySlice,
  admin: AdminSlice,
  auth: AuthSlice,
  user: userSilce,
});

export default rootReducers;
