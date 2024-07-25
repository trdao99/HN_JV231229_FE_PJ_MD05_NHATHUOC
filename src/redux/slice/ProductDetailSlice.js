import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/status";
import { findProductDetailbyProduct } from "../../services/ProductDetailService";

const ProductDetailSlice = createSlice({
    name: "productDetail",
    initialState: {
        loading: status.IDLE,
        data: [],
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        //trạng thái chờ tải dữ liệu
        builder.addCase(findProductDetailbyProduct.pending, (state)=>{
            state.loading = status.PENDING;
        });
        //trang thai tải dữ liệu thành công
        builder.addCase(findProductDetailbyProduct.fulfilled, (state, action) => {
            state.loading = status.SUCCESS;
            state.data = action.payload.data;
            console.log(action.payload);
        });
        //Trạng thái tải dữ liệu thất bại
        builder.addCase(findProductDetailbyProduct.rejected, (state, action) => {
            state.loading = status.FAILED;
            state.error = action.error.message;
        });

    },
});

export default ProductDetailSlice.reducer;