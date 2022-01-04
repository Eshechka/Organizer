import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfilePageContainer from "./pages/ProfilePage/ProfilePageContainer";
import GoalsPageContainer from "./pages/GoalsPage/GoalsPageContainer";
import NotFound from "./pages/NotFound/NotFound";
import {useEffect} from "react";
import TasksPageContainer from "./pages/TasksPage/TasksPageContainer";
import MainPageContainer from "./pages/MainPage/MainPageContainer";
import {useDispatch} from "react-redux";
import {addUserToken, removeUserToken} from "./store/actions/usersActions";
import loading from "./img/loader.gif"
import ResetPage from "./pages/ResetPage/ResetPage";
function App({userToken, loader}) {
    useEffect(() => {
        setInterval(() => {
            if (localStorage.getItem('token')) {
                dispatch(addUserToken())
            } else {
                dispatch(removeUserToken())
            }
        }, 500)
    });
    const dispatch = useDispatch()
    return (
        <>
            <HeaderContainer/>
            {userToken ? <Nav user={userToken}/> : null}
            <div className="maincontent">
                <Routes>
                    <Route
                        path="/"
                        element={
                            !userToken ? <MainPageContainer/>: <Navigate to="/do"/>
                        }
                    />
                    <Route
                        path="/do"
                        element={userToken ?<TasksPageContainer/>:<Navigate to="/"/>}
                    />
                    <Route
                        path="/goals"
                        element={userToken? <GoalsPageContainer/>:<Navigate to="/"/>}
                    />
                    <Route
                        path="/profile"
                        element={userToken?<ProfilePageContainer/>:<Navigate to="/"/>}
                    />
                    <Route path="/notfound" element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to="/notfound"/>}/>
                    <Route
                        path="/reset/:params"
                        element={<ResetPage/>}

                    />
                    <Route path="/notfound" element={<NotFound/>}/>
                </Routes>
            </div>
            {loader?<div className='wrapper'>
                <img src={loading} alt="loading"/>
            </div>:null}
            <Footer/>
        </>
    );
}

export default App;
