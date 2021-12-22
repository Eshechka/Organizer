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

function App({userToken, setCurrentUser}) {
  useEffect(() => {
    const localStUser = JSON.parse(localStorage.getItem("user"));
    const currentUser = localStUser?.id ? localStUser : {id: 1, name: "Максим"};
    setCurrentUser(currentUser);
  });
  const location = useLocation();
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
              userToken === false ? <Navigate to="/" /> : <TasksPageContainer />
            }
          />
          <Route
            exact
            path="/purposes"
            element={
              userToken === false ? <Navigate to="/" /> : <GoalsPageContainer />
            }
          />
          <Route
            exact
            path="/profile"
            element={<ProfilePageContainer />}
            // element={
            //   userToken === false ? <Navigate to="/" /> : <ProfilePageContainer />
            // }
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
