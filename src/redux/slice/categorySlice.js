import { createSlice } from "@reduxjs/toolkit";
import * as status from "../../constants/status"
import { addCategory, deleteCategory, findAllCategory } from "../../services/categoryService";

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        loading: status.IDLE,
        data: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        //trạng thái chờ tải dữ liệu
        builder.addCase(findAllCategory.pending, (state,action)=>{
            state.loading = status.PENDING;
        });

        //trang thai lay du lieu thanh cong
        builder.addCase(findAllCategory.fulfilled, (state,action)=>{
            state.loading = status.SUCCESS;
            console.log(action.payload)
            state.data = action.payload.data;
        });

        //trang thai lay du lieu that bai
        builder.addCase(findAllCategory.rejected, (state,action)=>{
            state.loading = status.FAILED;
            state.error = action.error.message;
        });

        //them moi category
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });

        //bat loi them moi category
        builder.addCase(addCategory.rejected, (state, action) => {
            state.error = action.error.message;
        });

        //xoa category theo id
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.data = state.data.filter(item => item.id!== action.payload);
        });

        //bat loi xoa category
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.error = action.error.message;
        });


    },
});

export default CategorySlice.reducer;