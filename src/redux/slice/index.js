
import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import AdminSlice from "./AdminSlice

const rootReducers = combineReducers({
    category : categorySlice,
    admin: AdminSlice,
});

export default rootReducers;

