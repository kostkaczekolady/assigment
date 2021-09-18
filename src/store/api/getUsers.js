import { createAsyncThunk } from "@reduxjs/toolkit";

const GetUsersData = createAsyncThunk("users/getUsers", async (thunkApi) => {
  const response = await fetch(`http://localhost:3001/names`, {
    method: "GET",
  });

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch users.",
    });
  }

  return await response.json();
});

export default GetUsersData;
