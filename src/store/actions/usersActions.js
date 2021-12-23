import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",

  initialState: {
    isSignIn: null, //показывает, какая форма открыта - логин или регистрация
    isOpenAuthLogin: false, //показывает, открыта сейчас форма логина или нет
    isOpenAuthRegister: false, //показывает, открыта сейчас форма регистрации или нет
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
    signUp(state) {
      state.currentUser = {id: 4, name: "Анна"};
      localStorage.setItem("user", JSON.stringify({id: 4, name: "Анна"}));
      state.userToken = true;
    },
    signIn(state) {
      if (localStorage.getItem("user")) {
        const localStUser = JSON.parse(localStorage.getItem("user"));
        state.currentUser = localStUser?.id
          ? localStUser
          : {id: 1, name: "Максим"};
        state.userToken = true;
      }
    },
    setSignIn(state) {
      state.isSignIn = true;
    },
    setSignUp(state) {
      state.isSignIn = false;
    },
    removeSignIn(state) {
      state.isSignIn = null;
    },
    removeUserToken(state) {
      localStorage.removeItem("user");
      state.userToken = false;
    },
  },
});

export const {
  deleteUser,
  setCurrentUser,
  isSignIn,
  setSignIn,
  setSignUp,
  removeSignIn,
  signUp,
  signIn,
  removeUserToken,
} = usersSlice.actions;

export default usersSlice.reducer;
