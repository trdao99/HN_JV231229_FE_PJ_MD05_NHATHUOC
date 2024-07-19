import { combineReducers } from "redux";
import AdminSlice from "./AdminSlice";

const reducers = combineReducers({
  admin: AdminSlice,
});

export default reducers;
