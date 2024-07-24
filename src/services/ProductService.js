import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET, POST } from "../constants/httpMethod";

export const findAllProducts = createAsyncThunk(
    "product/findAllProducts",
    async ({page, size, sortBy, sortDir}) => {
        const response = await BASE_URL[GET](`admin/list-product?page=${page}&size=${size}&sortBy=${sortBy}&sortDir=${sortDir}`);
        return response.data;
    }
);

export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product) => {
        const response = await BASE_URL[POST]("admin/addProduct", product,{
            headers:{
                'Content-Type': "multipart/form-data"
            }
        });
        return response.data;
    }
);

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({formDate,id}) => {
        const response = await BASE_URL[PUT](`admin/product/${id}`, formDate,{
            headers:{
                'Content-Type': "multipart/form-data"
            }
        });
        return response.data;
    }
);
