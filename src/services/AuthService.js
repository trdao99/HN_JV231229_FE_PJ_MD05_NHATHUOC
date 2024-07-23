import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import * as METHOD from "../constants/httpMethod";
import {Cookies} from "react-cookie"
export const findPhone = createAsyncThunk("auth/findPhone", async (phone) => {
  const response = await BASE_URL[METHOD.GET](
    `auth/phoneIsExist?phone=${phone}`
  );
  return response.data;
});
export const register = createAsyncThunk(
  "auth/register",
  async ({ registerUser }) => {
    const response = await BASE_URL[METHOD.POST]("auth/register", registerUser);
    return response.data;
  }
);
export const login = createAsyncThunk("auth/login", async ({ loginUser }) => {
  const response = await BASE_URL[METHOD.POST]("auth/login", loginUser);
  const cookie = new Cookies();
  cookie.set("token", response.data.data.token, { maxAge: 60 * 1000 * 60 });
  localStorage.setItem(
    "userLogin",
    JSON.stringify({ ...response.data.data, token: "" })
  );
  window.location.reload();
  return response.data;
});
