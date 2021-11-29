import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";

let mapStateToProps = (state) => {
  return {
    currentUser: state.profilePage.currentUser,
    users: state.profilePage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: { id: id } });
    },
  };
};

let ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
export default ProfilePageContainer;
