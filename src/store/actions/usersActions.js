import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api";

export const requestUpdatePassword = createAsyncThunk(
    'users/requestUpdatePassword',
    async (_, {getState,dispatch, rejectWithValue}) => {
        dispatch(loaderIn())
        try {
            const body = {
                password: getState().users.profile.inputConfirmPassword
            }
            const {data} = await api.updatePassword(body)
            return {data,body}
        } catch (error) {
            return rejectWithValue(error.response?.data)
        } finally {
            dispatch(loaderIn())
        }
    }
)
export const requestUpdateLogin = createAsyncThunk(
    'users/requestUpdateLogin',
    async (_, {getState, dispatch, rejectWithValue}) => {
        dispatch(loaderIn())
        try {
            const body = {
                username: getState().users.profile.inputConfirmLogin
            }
            const {data} = await api.updateLogin(body)
            return {data,body}
        } catch (error) {
            return rejectWithValue(error.response?.data)
        } finally {
            dispatch(loaderIn())
        }
    }
)
export const requestGetData = createAsyncThunk(
    'users/requestGetData',
    async (_, {dispatch ,rejectWithValue}) => {
        dispatch(loaderIn())
        try {
            const {data} = await api.getUser()
            return data
        } catch (error) {
            return rejectWithValue(error.response?.data)
        } finally {
            dispatch(loaderIn())
        }
    }
)
export const requestDeleteProfileId = createAsyncThunk(
    'users/requestDeleteProfileId',
    async (_, {rejectWithValue}) => {
        try {
            const userId = JSON.parse(localStorage.getItem('id'))
            const {data} = await api.deleteProfile(userId)
            return data
        } catch (error) {
            return rejectWithValue(error.response?.data)
        }
    }
)
export const requestRegistration = createAsyncThunk(
    'users/requestRegistration',
    async (_, {getState, dispatch, fulfillWithValue, rejectWithValue}) => {
        dispatch(loaderIn())
        try {
            const body = {
                username: getState().users.inputLogin,
                password: getState().users.inputPassword
            }
            const {data} = await api.registration(body)

            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('id', JSON.stringify(data.id))
            return fulfillWithValue()
        } catch (e) {
            return rejectWithValue(e.response?.data.message)
        } finally {
            dispatch(loaderIn())
        }
    }
)

export const requestAuthorization = createAsyncThunk(
    'users/requestAuthorization',
    async (_, {getState, dispatch , fulfillWithValue, rejectWithValue}) => {
        dispatch(loaderIn())
        try {
            const body = {
                username: getState().users.inputLogin,
                password: getState().users.inputPassword
            }
            const {data} = await api.authorization(body)

            localStorage.setItem('token', JSON.stringify(data.token))
            localStorage.setItem('id', JSON.stringify(data.id))
            return fulfillWithValue()
        } catch (e) {
            return rejectWithValue(e.response?.data.message)
        } finally {
            dispatch(loaderIn())
        }
    }
)
const usersSlice = createSlice({
    name: "users",
    initialState: {
        inputLogin: '',
        inputPassword: '',
        errorsData: {
            globalText: '',
            login: {
                error: false,
                text: '',
                borderColor: null
            },
            password: {
                error: false,
                text: '',
                borderColor: null
            },
        },
        isLoaderIn: false,
        isSignIn: null, //показывает, какая форма открыта - логин или регистрация
        isOpenAuthLogin: false, //показывает, открыта сейчас форма логина или нет
        isOpenAuthRegister: false, //показывает, открыта сейчас форма регистрации или нет
        userToken: false,
        profile: {
            isOpenDelete: false,
            isChangePassword: false,
            isChangeLogin: false,
            inputLogin: '',
            inputPassword: '',
            inputConfirmLogin: '',
            inputConfirmPassword: '',
            login: '',
            password: '',
            errorLogin: {
                error: false,
                text: '',
                color: '',
            },
            errorPassword: {
                error: false,
                text: '',
                color: '',
            },
            errorConfirmLogin: {
                error: true,
                text: '',
                color: '',
            },
            errorConfirmPassword: {
                error: true,
                text: '',
                color: '',
            },
            globalError:''
        }
    },

    reducers: {
        loaderIn(state) {
            state.isLoaderIn = !state.isLoaderIn
        },
        changedLogin(state, {payload}) {
            if (!payload.text) {
                state.errorsData.login.borderColor = 'red'
                state.errorsData.login.text = 'Логин не должен быть пустым'
            } else {
                state.errorsData.login.borderColor = 'green'
                state.errorsData.login.text = ''
            }
            state.inputLogin = payload.text
        },
        changedPassword(state, {payload}) {
            if (payload.text.length < 4) {
                state.errorsData.password.borderColor = 'red'
                state.errorsData.password.text = 'Пароль должен быть минимум 4 символа'
                state.errorsData.password.error = true
            } else {
                state.errorsData.password.borderColor = 'green'
                state.errorsData.password.text = ''
                state.errorsData.password.error = true
            }
            state.inputPassword = payload.text
        },
        setSignIn(state) {
            state.isSignIn = true;
        },
        setSignUp(state) {
            state.isSignIn = false;
        },
        removeSignIn(state) {
            state.isSignIn = null
            state.isOpenAuthRegister = false
            state.isOpenAuthLogin = false
            state.inputLogin = ''
            state.inputPassword = ''
            state.errorsData.globalText = ''
        },
        removeUserToken(state) {
            state.userToken = false;
            localStorage.removeItem('token')
            localStorage.removeItem('id')
        },
        addUserToken(state) {
            state.userToken = true;
        },
        toggleWindowDelete(state) {
            state.profile.isOpenDelete = !state.profile.isOpenDelete
        },
        toggleWindowChangeLogin(state) {
            state.profile.isChangeLogin = !state.profile.isChangeLogin
        },
        toggleWindowChangePassword(state) {
            state.profile.isChangePassword = !state.profile.isChangePassword
        },
        inputLoginProfile(state, {payload}) {
            if (!payload.text) {
                state.profile.errorLogin.color = 'red'
                state.profile.errorLogin.text = 'Логин не должен быть пустым'
                state.profile.errorLogin.error = true
            } else {
                state.profile.errorLogin.color = 'green'
                state.profile.errorLogin.text = ''
                state.profile.errorLogin.error = false
            }
            state.profile.inputLogin = payload.text
        },
        inputPasswordProfile(state, {payload}) {
            if (payload.text.length < 4) {
                state.profile.errorPassword.color = 'red'
                state.profile.errorPassword.text = 'Пароль должен быть минимум 4 символа'
                state.profile.errorPassword.error = true
            } else {
                state.profile.errorPassword.color = 'green'
                state.profile.errorPassword.text = ''
                state.profile.errorPassword.error = false
            }
            state.profile.inputPassword = payload.text
        },
        inputConfirmLoginProfile(state, {payload}) {
            if (payload.text !== state.profile.inputLogin) {
                state.profile.errorConfirmLogin.color = 'red'
                state.profile.errorConfirmLogin.text = 'Логины не совпадают'
                state.profile.errorConfirmLogin.error = true
            } else {
                state.profile.errorConfirmLogin.color = 'green'
                state.profile.errorConfirmLogin.text = ''
                state.profile.errorConfirmLogin.error = false
            }
            state.profile.inputConfirmLogin = payload.text
        },
        inputConfirmPasswordProfile(state, {payload}) {
            if (payload.text !== state.profile.inputPassword) {
                state.profile.errorConfirmPassword.color = 'red'
                state.profile.errorConfirmPassword.text = 'Пароли не совпадают'
                state.profile.errorConfirmPassword.error = true
            } else {
                state.profile.errorConfirmPassword.color = 'green'
                state.profile.errorConfirmPassword.text = ''
                state.profile.errorConfirmPassword.error = false
            }
            state.profile.inputConfirmPassword = payload.text
        }
    },
    extraReducers: {
        [requestAuthorization.fulfilled]: state => {
            state.isSignIn = null
            state.isOpenAuthLogin = false
            state.inputLogin = ''
            state.inputPassword = ''
            state.errorsData.globalText = ''
        },
        [requestAuthorization.rejected]: (state, action) => {
            state.errorsData.globalText = action.payload
        },
        [requestRegistration.fulfilled]: state => {
            state.isSignIn = null
            state.isOpenAuthRegister = false
            state.inputLogin = ''
            state.inputPassword = ''
            state.errorsData.globalText = ''
        },
        [requestRegistration.rejected]: (state, action) => {
            state.errorsData.globalText = action.payload
        },
        [requestDeleteProfileId.fulfilled]: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            state.profile.isOpenDelete = !state.profile.isOpenDelete
        },
        [requestDeleteProfileId.rejected]: (state, {payload}) => {
            console.log(payload)
            state.profile.isOpenDelete = !state.profile.isOpenDelete
        },
        [requestGetData.fulfilled]: (state, {payload}) => {
            state.profile.login = payload.username
            state.profile.password = payload.password
        },
        [requestGetData.rejected]: (state, {payload}) => {
            console.log(payload)
        },
        [requestUpdateLogin.fulfilled]: (state, {payload}) => {
            state.profile.inputLogin = ''
            state.profile.inputConfirmLogin = ''
            state.profile.isChangeLogin = !state.profile.isChangeLogin
            localStorage.setItem('token', JSON.stringify(payload.data.newToken))
            localStorage.setItem('id', JSON.stringify(payload.data.id))
            state.profile.login = payload.body.username
            state.profile.globalError=''
        },
        [requestUpdateLogin.rejected]: (state, {payload}) => {
            state.profile.inputLogin = ''
            state.profile.inputConfirmLogin = ''
            state.profile.globalError=payload.message
        },
        [requestUpdatePassword.fulfilled]: (state, {payload}) => {
            state.profile.inputPassword = ''
            state.profile.inputConfirmPassword = ''
            state.profile.globalError=''
            state.profile.isChangePassword = !state.profile.isChangePassword
            localStorage.setItem('token', JSON.stringify(payload.data.newToken))
            localStorage.setItem('id', JSON.stringify(payload.data.id))
            state.profile.password = payload.body.password
        },
        [requestUpdatePassword.rejected]: (state, {payload}) => {
            console.log(payload)
            state.profile.inputPassword = ''
            state.profile.inputConfirmPassword = ''
            state.profile.globalError=payload.message
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
    setSignIn,
    setSignUp,
    removeSignIn,
    signUp,
    removeUserToken,
    changedPassword,
    changedLogin,
    addUserToken,
    loaderIn,
} = usersSlice.actions;

export default usersSlice.reducer;
