import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";
export const requestGetData=createAsyncThunk(
    'users/requestGetData',
    async (_, {rejectWithValue })=>{
      try{
        const{data}=await api.getUser()
        return data
      } catch (error){
        return rejectWithValue(error.response?.data)
      }
    }
)
export const requestDeleteProfileId=createAsyncThunk(
    'users/requestDeleteProfileId',
    async (_, {rejectWithValue })=>{
      try{
        const userId=JSON.parse(localStorage.getItem('id'))
        const{data}=await api.deleteProfile(userId)
        return data
      } catch (error){
        return rejectWithValue(error.response?.data)
      }
    }
)
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
    profile:{
      isOpenDelete:false,
      isChangePassword:false,
      isChangeLogin:false,
      inputLogin:'',
      inputPassword:'',
      inputConfirmLogin:'',
      inputConfirmPassword:'',
      login:'',
      password:''
    },
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
    },
    toggleWindowDelete(state){
      state.profile.isOpenDelete=!state.profile.isOpenDelete
    },
    toggleWindowChangeLogin(state){
      state.profile.isChangeLogin=!state.profile.isChangeLogin
    },
    toggleWindowChangePassword(state){
      state.profile.isChangePassword=!state.profile.isChangePassword
    },
    inputLoginProfile(state,{payload}){
      state.profile.inputLogin=payload.text
    },
    inputPasswordProfile(state,{payload}){
      state.profile.inputPassword=payload.text
    },
    inputConfirmLoginProfile(state,{payload}){
      state.profile.inputConfirmLogin=payload.text
    },
    inputConfirmPasswordProfile(state,{payload}){
      state.profile.inputConfirmPassword=payload.text
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
    },
    [requestDeleteProfileId.fulfilled]:(state,{payload})=>{
      console.log(payload)
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      state.profile.isOpenDelete=!state.profile.isOpenDelete
    },
    [requestDeleteProfileId.rejected]:(state,{payload})=> {
      console.log(payload)
      state.profile.isOpenDelete=!state.profile.isOpenDelete
    },
    [requestGetData.fulfilled]:(state,{payload})=> {
      console.log(payload)
      state.profile.login=payload.username
      state.profile.password=payload.password
    },
    [requestGetData.rejected]:(state,{payload})=> {
      console.log(payload)
    },
  }

});

export const {
  inputConfirmLoginProfile,
  inputConfirmPasswordProfile,
  toggleWindowChangeLogin,
  toggleWindowChangePassword,
  toggleWindowDelete,
  inputLoginProfile,
  inputPasswordProfile,
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
