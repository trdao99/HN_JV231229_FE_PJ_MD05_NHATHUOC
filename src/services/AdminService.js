import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ADMIN_URL } from "../api";
import * as METHOD from "../constants/httpMethod";
import { notification } from "antd";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
const token = cookie.get("token");

export const getUser = createAsyncThunk("getuser", async ({ sort, page }) => {
  const response = await ADMIN_URL[METHOD.GET](
    `/getuser?sort=${sort}&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
});

export const block = createAsyncThunk("block", async (id) => {
  const response = await ADMIN_URL[METHOD.PUT](`lockUser?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return id;
});

export const searchUser = createAsyncThunk("search", async (name) => {
  try {
    const response = await ADMIN_URL[METHOD.GET](`searchUser?search=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    notification.error({ message: error.response.data.message, duration: 3 });
    return { content: [] };
  }
});
export const uploadBanner = createAsyncThunk(
  "uploadBanner",
  async (formData) => {
    const response = await ADMIN_URL[METHOD.POST](`banner`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);
export const getBanners = createAsyncThunk("getBanners", async () => {
  const response = await ADMIN_URL[METHOD.GET](`banner`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
});
export const setBanners = createAsyncThunk("setBanners", async (id) => {
  const response = await ADMIN_URL[METHOD.PUT](`banner`, id, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
});
