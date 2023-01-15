import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  userprofile: "",
};

const authSlice = createSlice({
  name: "aunthentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userprofile = "";
    },
    profile(state, action) {
      state.userprofile = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
