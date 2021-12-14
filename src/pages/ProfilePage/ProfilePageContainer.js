import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";

const mapStateToProps = (state) => {
  return {
    currentUser: state.profilePage.currentUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => {
      dispatch({type: "DELETE_USER", payload: {id}});
      dispatch({type: "TOGGLE_USER"});
    },
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePageContainer;
