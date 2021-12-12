import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfilePageContainer from "./pages/ProfilePage/ProfilePageContainer";
import GoalsPageContainer from "./pages/GoalsPage/GoalsPageContainer";
import NotFound from "./pages/NotFound/NotFound";
import {useEffect} from "react";
import TasksPageContainer from "./pages/TasksPage/TasksPageContainer";
import MainPageContainer from "./pages/MainPage/MainPageContainer";

function App({ user,setCurrentUser }) {
    useEffect(()=>{
        let currentUser=JSON.parse(localStorage.getItem('user'))
        setCurrentUser(currentUser)

    })
  return (
    <>
      <HeaderContainer />
      <Nav user={user}  />
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Navigate to="/do" /> : <MainPageContainer />}
          // element={user === true ? <Navigate to="/do" /> : <MainPageContainer />}
        />
        <Route
          exact
          path="/do"
          element={user === false ? <Navigate to="/" /> : <TasksPageContainer />}
        />
        <Route
          exact
          path="/purposes"
          element={
            user === false ? <Navigate to="/" /> : <GoalsPageContainer />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            user === false ? <Navigate to="/" /> : <ProfilePageContainer />
          }
        />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
