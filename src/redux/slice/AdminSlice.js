import { createSlice } from "@reduxjs/toolkit";
import { block, getUser, searchUser } from "../../service/AdminService";
const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: "idle",
    data: [],
    error: null,
    total: null,
    pageSize: null,
    number: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = action.payload.content;
      state.loading = "successed";
      state.total = action.payload.totalElements;
      state.pageSize = action.payload.size;
      state.number = action.payload.number;
    });

    builder.addCase(block.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(block.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = "successed";
      const newData = state.data;
      const indexUpdate = newData.findIndex(
        (item) => item.id === action.payload
      );
      newData[indexUpdate].status = !newData[indexUpdate].status;
      state.data = newData;
    });
    builder.addCase(block.rejected, (state, error) => {
      state.loading = "error";
      state.error = error;
    });
    builder.addCase(searchUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(searchUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = "successed";
      state.data = action.payload;
    });
    builder.addCase(searchUser.rejected, (state, error) => {
      state.loading = "error";
      state.error = error;
    });
  },
});

export default adminSlice.reducer;
