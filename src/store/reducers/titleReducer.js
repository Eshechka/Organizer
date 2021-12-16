let defaultState={
    form:{
        title:'',
        buttonTitle:'',
    },
    value: false,
    userProfile: false,
    datetime: {
        time:'',
        day:'',
        year:'',
    },
    backgroundEffect:{
        preMouseX:0,
        preElementX:-87,
        directionX:0,
    }
}
let titleReducer=(state=defaultState, action)=>{
    let stateCopy={...state}
    switch (action.type){
        case 'DATETIME':
            stateCopy.datetime.time=action.time
            stateCopy.datetime.day=action.day
            stateCopy.datetime.year=action.year
            return stateCopy
        case 'LOGIN':
            stateCopy.form.title='Вход'
            stateCopy.form.buttonTitle='Войти'
            stateCopy.value=!stateCopy.value
                return stateCopy
        case 'REGISTER':
            stateCopy.form.title='Регистрация'
            stateCopy.form.buttonTitle='Зарегистрироваться'
            stateCopy.value=!stateCopy.value
            return stateCopy

        case 'BACKGROUND_EFFECT':
            stateCopy.backgroundEffect.directionX=action.positionX-stateCopy.backgroundEffect.preMouseX;
            if (stateCopy.backgroundEffect.directionX > 0) {
                if (stateCopy.backgroundEffect.preElementX > -90) {
                    stateCopy.backgroundEffect.preElementX--
                }
            } else if (stateCopy.backgroundEffect.directionX < 0) {
                if (stateCopy.backgroundEffect.preElementX < 0) {
                    stateCopy.backgroundEffect.preElementX++
                }
            }
            stateCopy.backgroundEffect.preMouseX=action.positionX
            return stateCopy
        case 'EXIT':
            localStorage.removeItem('user')
            stateCopy.userProfile=!stateCopy.userProfile
            return stateCopy
        case 'SIGN_UP':
            stateCopy.userProfile=true
            localStorage.setItem("user", JSON.stringify({ id: 2, name: "Максим" }));
            stateCopy.value=!stateCopy.value
            return stateCopy
        case 'SIGN_IN':
            if(localStorage.getItem('user')){
                stateCopy.userProfile=true
                stateCopy.value=!stateCopy.value
            }
            return stateCopy
        case 'TOGGLE_USER':
            stateCopy.userProfile=!stateCopy.userProfile
            return stateCopy
        default:
            return state

    }
}
export default titleReducer