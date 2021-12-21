import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {deleteUser, setCurrentUser, toggleUser} from "../../store/reducers/usersActions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCurrentUser: (userId) => {
      dispatch(deleteUser({id: userId}));
      dispatch(toggleUser());
    },
    setCurrentUser: (userObj) => {
      dispatch(setCurrentUser( {user: userObj}));
    },
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePageContainer;
