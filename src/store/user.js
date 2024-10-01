import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Usertype",
  initialState: "customer",
  reducers: {
    changeUserType: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
