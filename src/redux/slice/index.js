import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import adminSlice from "./AdminSlice";

const rootReducers = combineReducers({
    category : categorySlice,
    admin: adminSlice,

});

export default rootReducers;
