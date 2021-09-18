import { createAsyncThunk } from "@reduxjs/toolkit";

const DeleteUserData = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkApi) => {
    const response = await fetch(`http://localhost:3001/names/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: "Failed to delete user.",
      });
    }

    const updatedResponse = await fetch(`http://localhost:3001/names`, {
      method: "GET",
    });

    return await updatedResponse.json();
  }
);

export default DeleteUserData;
