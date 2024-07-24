import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/status"
import { addProduct, findAllProducts } from "../../services/ProductService";

const ProductSlice = createSlice({
    name: "product",
    initialState: {
        loading: status.IDLE,
        data: [],
        total: 0,
        number: 0,
        size: 5,
        sortBy: "id",
        sortDir: "asc",
        error: null,
    },
    reducers: {
        changePage: (state, action) => {
            state.number = action.payload.page;
            state.size = action.payload.size;
            state.sortBy = action.payload.sortBy;
            state.sortDir = action.payload.sortDir;
        },
    },
    extraReducers: (builder) => {
        //Trạng thái chờ tải dữ liệu
        builder.addCase(findAllProducts.pending, (state)=>{
            state.loading = status.PENDING;
        });

        //Trạng thái tải dữ liệu thành công
        builder.addCase(findAllProducts.fulfilled, (state, action) => {
            state.loading = status.SUCCESS;
            state.data = action.payload.data.content;
            state.total = action.payload.data.totalElements;
        });

        //Trạng thái tải dữ liệu thất bại
        builder.addCase(findAllProducts.rejected, (state, action) => {
            state.loading = status.FAILED;
            state.error = action.error.message;
        });

        //Thêm mới product
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });

        //Bat loi them moi product
        builder.addCase(addProduct.rejected, (state, action) => {
            state.error = action.error.message;
        });
        
    },    
});

export const { changePage } = ProductSlice.actions;
export default ProductSlice.reducer;