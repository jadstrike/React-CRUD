import { createSlice } from "@reduxjs/toolkit";
// import updateUsers from "../Components/UI/Content";
import dummydata from "../data";
const userSlice = createSlice({
  name: "users",
  initialState: { users: dummydata },
  reducers: {
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      console.log(action.payload);
      const { id, name, email, phone } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex].name = name;
        state.users[userIndex].email = email;
        state.users[userIndex].phone = phone;
      }
    },
  },
});


export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice;
