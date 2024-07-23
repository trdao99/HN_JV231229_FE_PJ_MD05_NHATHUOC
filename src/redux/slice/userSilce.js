import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../../services/Userservice";
const userSilce = createSlice({
  name: "user",
  initialState: {
    loading: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = "pending";
      console.log("pending");
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = "success";
      console.log("success");
      state.data = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, error) => {
      state.error = error;
    });
  },
});

export default userSilce.reducer;
