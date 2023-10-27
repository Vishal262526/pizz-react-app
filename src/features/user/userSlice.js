import { createSlice } from "@reduxjs/toolkit";

const initState = {
  username: "Guest",
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    updateName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

export const getUsername = (state) => state.user.username;
