import { createSlice } from "@reduxjs/toolkit";
import { findPhone, login, register } from "../../services/AuthService";
import { Cookies } from "react-cookie";
const adminSlice = createSlice({
  name: "auth",
  initialState: {
    loading: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findPhone.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(findPhone.fulfilled, (state, action) => {
      state.loading = "success";
      state.data = action.payload;
    });
    builder.addCase(register.payload, (state) => {
      state.loading = "pending";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = "success";
      state.data = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = "success";
      console.log(action.payload);
    });
    builder.addCase(login.error, (state, error) => {
      state.loading = "success";
      state.error = error;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
  },
});

export default adminSlice.reducer;
