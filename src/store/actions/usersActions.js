import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",

  initialState: {
    isSignIn: true,
    isOpenAuthForm: false,
    userToken: false,
    currentUser: null,
    users: [
      {id: 1, name: "Екатерина"},
      {id: 2, name: "Максим"},
    ],
  },

  reducers: {
    deleteUser(state, {payload}) {
      state.users = state.users.filter((user) => user.id !== payload.id);
      state.currentUser = null;
      localStorage.removeItem("user");
    },
    setCurrentUser(state, {payload}) {
      state.currentUser = payload.user;
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    openAuthForm(state) {
      console.log("openAuthForm");
      state.isOpenAuthForm = true;
    },
    signUp(state) {
      state.userToken = true;
      console.log("state", state);
      state.currentUser = {id: 4, name: "Анна"};
      localStorage.setItem("user", JSON.stringify({id: 4, name: "Анна"}));
      state.isOpenAuthForm = false;
    },
    signIn(state) {
      if (localStorage.getItem("user")) {
        const localStUser = JSON.parse(localStorage.getItem("user"));
        const currentUser = localStUser?.id
          ? localStUser
          : {id: 1, name: "Максим"};
        state.currentUser = currentUser;
        state.userToken = true;
        state.isOpenAuthForm = false;
      }
    },
    setSignIn(state) {
      state.isSignIn = true;
    },
    setSignUp(state) {
      state.isSignIn = false;
    },
    toggleUser(state) {
      state.userToken = false;
    },
    exit(state) {
      localStorage.removeItem("user");
      state.userToken = false;
    },
    cancel(state) {
      state.isOpenAuthForm = false;
    },
  },
});

export const {
  deleteUser,
  setCurrentUser,
  openAuthForm,
  isSignIn,
  setSignIn,
  setSignUp,
  signUp,
  signIn,
  exit,
  cancel,
  toggleUser,
} = usersSlice.actions;
export default usersSlice.reducer;
