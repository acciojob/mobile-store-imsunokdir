import { configureStore } from "@reduxjs/toolkit";
import mobileSlice from "./mobile";
import userSlice from "./user";

const mobileStore = configureStore({
  reducer: {
    mobiles: mobileSlice.reducer,
    userType: userSlice.reducer,
  },
});

export default mobileStore;
