import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import ProductSlice from "./ProductSlice";
import AdminSlice from "./AdminSlice";
import AuthSlice from "./AuthSlice";
import userSilce from "./userSilce";
import ProductDetailSlice from "./ProductDetailSlice";

const rootReducers = combineReducers({
  category: categorySlice,
  admin: AdminSlice,
  auth: AuthSlice,
  user: userSilce,
  product: ProductSlice,
  productDetail : ProductDetailSlice
});

export default rootReducers;
