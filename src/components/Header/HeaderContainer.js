import {connect} from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
        user: state.titlePage.userProfile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        click: (e) => {
            if (e.target.innerText === 'Вход') {
                dispatch({type: 'LOGIN'})

            } else if (e.target.innerText === 'Выйти') {
                dispatch({type: 'EXIT'})

            } else {
                dispatch({type: 'REGISTER'})
            }
        }
    }
}
let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer