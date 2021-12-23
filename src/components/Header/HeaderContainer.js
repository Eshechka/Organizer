import {connect} from "react-redux";
import Header from "./Header";
import {
  exit,
  openAuthForm,
  setSignIn,
  setSignUp,
} from "../../store/actions/usersActions";

const mapStateToProps = (state) => {
  return {
    userToken: state.users.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickSighIn: () => {
      dispatch(openAuthForm());
      dispatch(setSignIn());
    },
    clickSighUp: () => {
      dispatch(openAuthForm());
      dispatch(setSignUp());
    },
    clickExit: () => {
      dispatch(exit());
    },
  };
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
