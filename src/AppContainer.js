import { connect } from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
  return {
    user: state.titlePage.userProfile,
  };
};
let mapDispatchToProps=(dispatch)=>{
  return{
    setCurrentUser: (currentUser)=>{
      dispatch({type:'SET_CURRENT_USER',currentUser})
    }
  }
}
let AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
export default AppContainer;
