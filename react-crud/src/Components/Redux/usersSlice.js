import dummydata from "../../data";
import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: dummydata,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      console.log(dummydata);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
