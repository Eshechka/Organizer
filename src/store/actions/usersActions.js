import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";
export const requestRegistration=createAsyncThunk(
    'users/requestRegistration',
    async (_,{getState,fulfillWithValue,rejectWithValue})=>{
      try {
        const body={
          username:getState().users.inputLogin,
          password:getState().users.inputPassword
        }
        const {data}=await api.registration(body)

        localStorage.setItem('token',JSON.stringify(data.token))
        localStorage.setItem('id',JSON.stringify(data.id))
        return fulfillWithValue()
      }catch (e){
        return rejectWithValue(e.response?.data.message)
      }
    }
)

export const requestAuthorization=createAsyncThunk(
    'users/requestAuthorization',
    async (_,{getState,fulfillWithValue,rejectWithValue})=>{
      try {
        const body={
          username:getState().users.inputLogin,
          password:getState().users.inputPassword
        }
        const {data}=await api.authorization(body)

        localStorage.setItem('token',JSON.stringify(data.token))
        localStorage.setItem('id',JSON.stringify(data.id))
        return fulfillWithValue()
      }catch (e){
       return rejectWithValue(e.response?.data.message)
      }
    }
)
const usersSlice = createSlice({
  name: "users",
  initialState: {
    inputLogin:'',
    inputPassword:'',
    errorsData:{
      globalText:'',
      login:{
        error:false,
        text:'',
        borderColor:null
      },
      password:{
        error:false,
        text:'',
        borderColor:null
      },
    },
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
    changedLogin(state,{payload}){
      if(!payload.text){
        state.errorsData.login.borderColor='red'
        state.errorsData.login.text='Логин не должен быть пустым'
      }else {
        state.errorsData.login.borderColor='green'
        state.errorsData.login.text=''
      }
      state.inputLogin=payload.text
    },
    changedPassword(state,{payload}){
      if(payload.text.length<4){
        state.errorsData.password.borderColor='red'
        state.errorsData.password.text='Пароль должен быть минимум 4 символа'
        state.errorsData.password.error=true
      }else {
        state.errorsData.password.borderColor='green'
        state.errorsData.password.text=''
        state.errorsData.password.error=true
      }
      state.inputPassword=payload.text
    },
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
      state.isSignIn=null
      state.isOpenAuthRegister=false
      state.isOpenAuthLogin=false
      state.inputLogin=''
      state.inputPassword=''
      state.errorsData.globalText=''
    },
    removeUserToken(state) {
      state.userToken = false;
      localStorage.removeItem ('token')
      localStorage.removeItem ('id')
    },
    addUserToken(state) {
      state.userToken = true;
    }
  },
  extraReducers:{
    [requestAuthorization.fulfilled]:state=>{
      state.isSignIn=null
      state.isOpenAuthLogin=false
      state.inputLogin=''
      state.inputPassword=''
      state.errorsData.globalText=''
    },
    [requestAuthorization.rejected]:(state,action)=>{
      state.errorsData.globalText=action.payload
    },
    [requestRegistration.fulfilled]:state=>{
      state.isSignIn=null
      state.isOpenAuthRegister=false
      state.inputLogin=''
      state.inputPassword=''
      state.errorsData.globalText=''
    },
    [requestRegistration.rejected]:(state,action)=>{
      state.errorsData.globalText=action.payload
    }
  }

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
  changedPassword,
  changedLogin,
    addUserToken
} = usersSlice.actions;

export default usersSlice.reducer;
