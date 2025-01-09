import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    logged: null
  },
  reducers: {

    makelogin: (state, action) => {
      state.logged = action.payload;
    }

  }
});

export const { makelogin } = loginSlice.actions;
export default loginSlice.reducer;