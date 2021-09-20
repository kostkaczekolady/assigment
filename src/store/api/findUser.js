import { createAsyncThunk } from '@reduxjs/toolkit';

const FindUserData = createAsyncThunk('users/findUser', async (id, thunkApi) => {
  const response = await fetch(`http://localhost:3001/names/${id}`, {
    method: 'GET',
  });

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to find user.',
    });
  }

  return await response.json();
});

export default FindUserData;
