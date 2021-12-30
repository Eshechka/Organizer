import {connect} from "react-redux";
import App from "./App";

let mapStateToProps = (state) => {
    return {
        userToken: state.users.userToken,
        loader: state.users.isLoaderIn,
    };
};
let AppContainer = connect(mapStateToProps, null)(App);
export default AppContainer;
