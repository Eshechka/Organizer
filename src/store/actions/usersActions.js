import {createSlice} from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:'users',
    initialState:{
        form:{
            title:'',
            buttonTitle:'',
        },
        value: false,
        userProfile: false,
        currentUser: null,
        users: [
            {id: 1, name: "Екатерина"},
            {id: 2, name: "Максим"},
        ],
    },
    reducers:{
        deleteUser(state,{payload}){
            state.users = state.users.filter(
                (user) => user.id !== payload.id
            );
            state.currentUser = null;
            localStorage.removeItem("user");
        },
        setCurrentUser(state,{payload}){
            state.currentUser = payload.user;
            localStorage.setItem("user", JSON.stringify(payload.user));
        },
        openLogin(state){
            state.form.title='Вход'
            state.form.buttonTitle='Войти'
            state.value=!state.value
        },
        openRegistration(state){
            state.form.title='Регистрация'
            state.form.buttonTitle='Зарегистрироваться'
            state.value=!state.value
        },
        signUp(state){
            state.userProfile=true
            localStorage.setItem("user", JSON.stringify({ id: 2, name: "Максим" }));
            state.value=!state.value
        },
        signIn(state){
            if(localStorage.getItem('user')){
                state.userProfile=true
                state.value=!state.value
            }
        },
        toggleUser(state){
            state.userProfile=!state.userProfile
        },
        exit(state){
            localStorage.removeItem('user')
            state.userProfile=!state.userProfile
        },
        cancel(state){
            state.value=!state.value
        }

    }
})
export const {deleteUser,
    setCurrentUser,
    openLogin,
    openRegistration,
    signUp,
    signIn,
    exit,
    cancel,
    toggleUser}=usersSlice.actions
export default usersSlice.reducer