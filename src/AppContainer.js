import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
  return {
    user: state.titlePage.userProfile,
    currentUser: state.profilePage.currentUser,
  };
};
let AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
