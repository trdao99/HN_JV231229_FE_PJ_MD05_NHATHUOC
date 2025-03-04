import { createAsyncThunk } from "@reduxjs/toolkit";

import { ADMIN_URL } from "../api";
import * as METHOD from "../constants/httpMethod";
import { notification } from "antd";

export const getUser = createAsyncThunk("getuser", async ({ sort, page }) => {
  const response = await ADMIN_URL[METHOD.GET](
    `getuser?sort=${sort}&page=${page}`
  );
  return response.data;
});
export const block = createAsyncThunk("block", async (id) => {
  const response = await ADMIN_URL[METHOD.PUT](`lockUser?id=${id}`);
  return id;
});
export const searchUser = createAsyncThunk("search", async (name) => {
  try {
    const response = await ADMIN_URL[METHOD.GET](`searchUser?search=${name}`);
    return response.data;
  } catch (error) {
    console.log(error);
    notification.error({ message: error.response.data.message, duration: 3 });
    return { content: [] };
  }
});
