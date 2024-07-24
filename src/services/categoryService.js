import { createAsyncThunk } from "@reduxjs/toolkit"
import { DELETE, GET, POST, PUT } from "../constants/httpMethod"
import { BASE_URL } from "../api";

export const findAllCategory = createAsyncThunk(
    "category/findAllCategory",
    async ({page, size, sortBy, sortDir}) => {
        const response = await BASE_URL[GET](`admin/list-category?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`);
        return response.data;
    }
);

export const findCategoryById = createAsyncThunk(
    "category/findCategoryById",
    async (categoryId) => {
        const response = await BASE_URL[GET](`admin/category/${categoryId}`);
        return response.data;
    }
);

export const allCategory = createAsyncThunk(
    "category/getAllCategory",
    async () => {
        const response = await BASE_URL[GET](`admin/categories`);
        return response.data;
    }
);

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (category) => {
        const response = await BASE_URL[POST]("admin/category", category,{
            headers:{
                'Content-Type': "multipart/form-data"
            }
        });
        return response.data;
    }
);

export const updateCategory = createAsyncThunk(
    "category/updateCategory",
    async ({formData,id}) => {
        const response = await BASE_URL[PUT](`admin/category/${id}`, formData,{
            headers:{
                'Content-Type': "multipart/form-data"
            }
        });
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
