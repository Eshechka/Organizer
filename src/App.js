import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import TitleContainer from "./components/Title/TitleContainer";
import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import TodoContainer from "./components/Todo/TodoContainer";
import GoalsPageContainer from "./components/GoalsPage/GoalsPageContainer";
import NotFound from "./components/NotFound/NotFound";

function App({ user }) {
  return (
    <>
      <HeaderContainer />
      <Nav user={user} />
      <Routes>
        <Route
          exact
          path="/"
          element={user === true ? <Navigate to="/do" /> : <TitleContainer />}
        />
        <Route
          exact
          path="/do"
          element={user === false ? <Navigate to="/" /> : <TodoContainer />}
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
