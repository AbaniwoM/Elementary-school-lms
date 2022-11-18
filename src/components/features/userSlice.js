import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    student: null,
  },
  reducers: {
    login: (state, action) => {
        state.student = action.payload;
    },
    logout: (state) => {
        state.student = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.student.student;

export default userSlice.reducer;