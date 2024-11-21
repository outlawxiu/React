import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiUserAccount, profile } from "../services/index";

interface initialState {
  profile: profile;
}

const initialState: initialState = {
  profile: {},
};

export const getUserAccount = createAsyncThunk(
  "user/getUserAccount",
  async (cookie: string) => {
    const res = await apiUserAccount(cookie);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserAccount.fulfilled, (state, action) => {
      state.profile = action.payload.profile!;
    });
  },
});

export default userSlice.reducer;
