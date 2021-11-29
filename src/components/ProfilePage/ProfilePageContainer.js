import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";

let mapStateToProps = (state) => {
  return {
    currentUser: state.profilePage.currentUser,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: { id } });
      dispatch({type:'TOGGLE_USER'})
    },
  };
};

let ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
export default ProfilePageContainer;
