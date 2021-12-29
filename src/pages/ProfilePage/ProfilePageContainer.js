import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {
  deleteUser,
  setCurrentUser,
  removeUserToken, requestDeleteProfileId,
} from "../../store/actions/usersActions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCurrentUser: (userId) => {
      dispatch(deleteUser({id: userId}));
      dispatch(removeUserToken());
    },
    handleDeleteUserProfile:()=>{
      dispatch(requestDeleteProfileId())
    },
    setCurrentUser: (userObj) => {
      dispatch(setCurrentUser({user: userObj}));
    },
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePageContainer;
