import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfilePageContainer from "./pages/ProfilePage/ProfilePageContainer";
import GoalsPageContainer from "./pages/GoalsPage/GoalsPageContainer";
import NotFound from "./pages/NotFound/NotFound";
import {useEffect} from "react";
import TasksPageContainer from "./pages/TasksPage/TasksPageContainer";
import MainPageContainer from "./pages/MainPage/MainPageContainer";
import {useTransition} from "react-spring";
import {useDispatch} from "react-redux";
import {addUserToken, removeUserToken} from "./store/actions/usersActions";

function App({userToken, setCurrentUser}) {
  useEffect(() => {
    setInterval(()=>{
      if(localStorage.getItem('token')){
        dispatch(addUserToken())
      }else {
        dispatch(removeUserToken())
      }
    },500)

  });
  const location = useLocation();
  const dispatch=useDispatch()
  const animationPages = useTransition(location, {
    from: {
      opacity: 0,
      transform: `translateX(${200}px)`,
    },
    enter: {
      opacity: 1,
      transform: `translateX(${0}px)`,
    },
    leave: {
      opacity: 0,
      transform: `translateX(${-200}px)`,
    },
  });
  return (
    <>
      <HeaderContainer />
      {userToken ? <Nav user={userToken} /> : null}
      <div className="maincontent">
        <Routes>
          <Route
            exact
            path="/"
            element={userToken ? <Navigate to="/do" /> : <MainPageContainer />}
          />
          <Route
            exact
            path="/do"
            element={
              !userToken  ? <Navigate to="/" /> : <TasksPageContainer />
            }
          />
          <Route
            exact
            path="/purposes"
            element={
              !userToken  ? <Navigate to="/" /> : <GoalsPageContainer />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              !userToken  ? <Navigate to="/" /> : <ProfilePageContainer />
            }
          />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
