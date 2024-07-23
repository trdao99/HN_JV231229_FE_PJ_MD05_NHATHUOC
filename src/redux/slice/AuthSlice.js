import { createSlice } from "@reduxjs/toolkit";
import { findPhone, login, register } from "../../services/AuthService";
const AuthSlice = createSlice({
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
    builder.addCase(register.pending, (state) => {
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
    builder.addCase(login.rejected, (state, error) => {
      state.error = error;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
  },
});

export default AuthSlice.reducer;
