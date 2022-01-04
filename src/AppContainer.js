import {connect} from "react-redux";
import App from "./App";
import {changePath} from "./store/actions/usersActions";

let mapStateToProps = (state) => {
    return {
        userToken: state.users.userToken,
        loader: state.users.isLoaderIn,
        path: state.users.path
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        togglePath(path){
            dispatch(changePath({path}))
        }
    };
};
let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
