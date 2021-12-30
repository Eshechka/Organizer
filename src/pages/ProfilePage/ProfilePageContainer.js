import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {
  requestDeleteProfileId,
  toggleWindowDelete,
  toggleWindowChangeLogin,
  toggleWindowChangePassword,
  inputLoginProfile, inputPasswordProfile, inputConfirmLoginProfile, inputConfirmPasswordProfile,
} from "../../store/actions/usersActions";

const mapStateToProps = (state) => {
  return {
    inputLogin: state.users.profile.inputLogin,
    inputPassword: state.users.profile.inputPassword,
    inputConfirmLogin: state.users.profile.inputConfirmLogin,
    inputConfirmPassword: state.users.profile.inputConfirmPassword,
    isOpenDelete: state.users.profile.isOpenDelete,
    isChangeLogin: state.users.profile.isChangeLogin,
    isChangePassword: state.users.profile.isChangePassword,
    login: state.users.profile.login,
    password: state.users.profile.password
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteUserProfile:()=>{
      dispatch(requestDeleteProfileId())
    },
    isClickDelete:()=>{
      dispatch(toggleWindowDelete())
    },
    isClickLogin:()=>{
      dispatch(toggleWindowChangeLogin())
    },
    isClickPassword:()=>{
      dispatch(toggleWindowChangePassword())
    },
    changedLogin:(text)=>{
      dispatch(inputLoginProfile({text}))
    },
    changedPassword:(text)=>{
      dispatch(inputPasswordProfile({text}))
    },
    changedConfirmLogin:(text)=>{
      dispatch(inputConfirmLoginProfile({text}))
    },
    changedConfirmPassword:(text)=>{
      dispatch(inputConfirmPasswordProfile({text}))
    },
  };
};

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);

export default ProfilePageContainer;
