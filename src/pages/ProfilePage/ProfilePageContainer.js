import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";

const mapStateToProps = (state) => {
  return {
    currentUser: state.profilePage.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCurrentUser: (userId) => {
      dispatch({type: "DELETE_USER", payload: {id: userId}});
      dispatch({type: "TOGGLE_USER"});
    },
    setCurrentUser: (userObj) => {
      dispatch({type: "SET_CURRENT_USER", payload: {user: userObj}});
    },
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePageContainer;
