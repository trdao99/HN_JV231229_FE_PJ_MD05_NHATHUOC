import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import * as METHOD from "../constants/httpMethod";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
const token = cookie.get("token");
export const updateUser = createAsyncThunk(
  "user/editUser",
  async ({ user }) => {
    const response = await BASE_URL[METHOD.PUT]("user/editUser", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);
export const changePassword = createAsyncThunk(
  "user/changePass",
  async (partparams) => {
    const { phone, oldPassword, newPassword } = partparams;
    const response = await BASE_URL[METHOD.PUT](
      `user/changePassword?oldPassword=${oldPassword}&newPassword=${newPassword}&phone=${phone}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);
