import { createSlice } from "@reduxjs/toolkit";
import mobileData from "./mobileData";

const mobileSlice = createSlice({
  name: "Mobiles",
  initialState: mobileData,
  reducers: {
    updateMobile: (state, action) => {
      const { id, updatedProduct } = action.payload;
      return state.map((mobile) =>
        mobile.id === Number(id) ? { ...mobile, ...updatedProduct } : mobile
      );
    },
    delete: (state, action) => {
      const { id } = action.payload;
      return state.filter((mobile) => mobile.id !== Number(id));
    },
  },
});
export const mobileAction = mobileSlice.actions;
export default mobileSlice;
