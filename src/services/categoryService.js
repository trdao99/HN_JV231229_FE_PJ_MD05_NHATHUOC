import { createAsyncThunk } from "@reduxjs/toolkit";

import { GET, POST, PUT } from "../constants/httpMethod";
import { BASE_URL } from "../api";

export const findAllCategory = createAsyncThunk(
  "category/findAllCategory",
  async () => {
    const response = await BASE_URL[GET]("admin/list-category");
    return response.data;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (category) => {
    const response = await BASE_URL[POST]("admin/category", category);
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (category) => {
    const response = await BASE_URL[PUT](
      `admin/category/${category.id}`,
      category
    );
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (categoryId) => {
    await BASE_URL[DELETE](`admin/category/${categoryId}`);
    return categoryId;
  }
);
