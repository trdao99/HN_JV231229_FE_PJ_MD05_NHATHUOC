import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ADMIN_URL } from "../api";
import * as METHOD from "../constants/httpMethod";

export const getUser = createAsyncThunk(
  "getuser",
   async ({ sort, page }) => {
  const response = await ADMIN_URL[METHOD.GET](
    `getuser?sort=${sort}&page=${page}`
  );
  return response.data;
});
export const block = createAsyncThunk(
  "block",
   async (id) => {
  const response = await ADMIN_URL[METHOD.PUT](`lockUser?id=${id}`);
  return id;
});
export const searchUser = createAsyncThunk(
  "search",
   async (name) => {
  const response = await ADMIN_URL[METHOD.GET](`searchUser?search=${name}`);
  return response.data;
});
