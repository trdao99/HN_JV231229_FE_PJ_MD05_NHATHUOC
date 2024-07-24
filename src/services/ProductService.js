import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET, POST, PUT } from "../constants/httpMethod";
import { message } from "antd";

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
        try {
            const response = await BASE_URL[POST]("admin/addProduct", product,{
            headers:{
                'Content-Type': "multipart/form-data"
            }
        });
        message.success("Product added successfully");
        return response.data;
        } catch (error) {
            message.error("Product added failed")
        }
        
    }
);

export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async ({formData,id}) => {
        try {
            const response = await BASE_URL[PUT](`admin/product/${id}`, formData,{
                headers:{
                    'Content-Type': "multipart/form-data"
                }
            });
            message.success("Product update successfully");
            return response.data;
        } catch (error) {
            message.error("Product update failed.")
        }
    }
);
