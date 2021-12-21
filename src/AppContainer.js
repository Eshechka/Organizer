import {connect} from "react-redux";
import App from "./App";
import {setCurrentUser} from "./store/actions/usersActions";

let mapStateToProps = (state) => {
  return {
    user: state.users.userProfile,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (currentUser) => {
      dispatch(setCurrentUser({user: currentUser}));
    },
  };
};
let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
