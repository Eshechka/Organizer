import {connect} from "react-redux";
import Header from "./Header";
import {exit, openLogin, openRegistration} from "../../store/actions/usersActions";

let mapStateToProps = (state) => {
    return {
        user: state.users.userProfile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        click: (e) => {
            if (e.target.innerText === 'Вход') {
                dispatch(openLogin())

            } else if (e.target.innerText === 'Выйти') {
                dispatch(exit())

            } else {
                dispatch(openRegistration())
            }
        }
    }
}
let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)
export default HeaderContainer