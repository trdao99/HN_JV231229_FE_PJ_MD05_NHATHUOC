import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/status"
import { addProduct, changeStatusProduct, findAllProducts, updateProduct } from "../../services/ProductService";

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

        //update product
        builder.addCase(updateProduct.pending, (state, action) => {
            state.loading = status.PENDING;
        });
        //update product thanh cong
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const indexUpdate = state.data.findIndex(
                (item) => item.id === action.payload.id
            );
            if (indexUpdate !== -1) {
                state.data[indexUpdate] = action.payload;
            }
        });
        //bat loi update product
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = status.FAILED;
            state.error = action.error.message;
        });

        //update product status
        builder.addCase(changeStatusProduct.pending, (state, action) => {
            state.loading = status.PENDING;
        });
        //update product status thanh cong
        builder.addCase(changeStatusProduct.fulfilled, (state, action) => {
            state.loading = status.SUCCESS;
            const indexUpdate = state.data.findIndex(
                (item) => item.id === action.payload.id
            );
            if (indexUpdate!== -1) {
                state.data[indexUpdate] = {...state.data[indexUpdate], status: action.payload.status };
            }
        });
        //bat loi update product status
        builder.addCase(changeStatusProduct.rejected, (state, action) => {
            state.loading = status.FAILED;
            state.error = action.error.message;
        });

    },    
});

export const { changePage } = ProductSlice.actions;
export default ProductSlice.reducer;