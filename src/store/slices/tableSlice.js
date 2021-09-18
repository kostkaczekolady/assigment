import { createSlice } from "@reduxjs/toolkit";
import GetUsersData from "../api/getUsers";
import DeleteUserData from "../api/deleteUser";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    loading: true,
    users: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(DeleteUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteUserData.fulfilled, (state, action) => {
        state.loading = true;
        state.users = action.payload;
      });
  },
});

export default tableSlice.reducer;
