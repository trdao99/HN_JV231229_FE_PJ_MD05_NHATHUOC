import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET, PUT } from "../constants/httpMethod";

export const findProductDetailbyProduct = createAsyncThunk(
    "productDetail/findProductDetailbyProduct",
    async (id) => {
        const response = await BASE_URL[GET](`admin/product-detail/${id}`);
        return response.data;
    }
);

export const changeStockProduct = createAsyncThunk(
    "productDetail/changeStockProduct",
    async ({productId,newStock}) => {
        const response = await BASE_URL[PUT](`admin/stock/${productId}?newStock=${newStock}`);
        return response.data;
    }
);