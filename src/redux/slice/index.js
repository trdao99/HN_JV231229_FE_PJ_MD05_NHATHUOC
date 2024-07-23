import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import adminSlice from "./AdminSlice";
import ProductSlice from "./ProductSlice";
import AuthSlice from "./AuthSlice";

const rootReducers = combineReducers({
    category : categorySlice,
    admin: adminSlice,
    product: ProductSlice,
    auth: AuthSlice
});

export default rootReducers;
