import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import TitleContainer from "./components/Title/TitleContainer";
import GoalsPage from "./components/GoalsPage/GoalsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import TodoContainer from "./components/Todo/TodoContainer";

function App({ user }) {
  return (
    <>
      <HeaderContainer />
      <Nav user={user} />
      <Switch>
        <Route exact path="/">
          {user === true ? <Redirect to="/do" /> : <TitleContainer />}
        </Route>
        <Route exact path="/do">
          {user === false ? <Redirect to="/" /> : <TodoContainer />}
        </Route>
        <Route exact path="/purposes">
          {user === false ? <Redirect to="/" /> : <GoalsPage />}
        </Route>
        <Route exact path="/profile">
          {user === false ? <Redirect to="/" /> : <ProfilePage />}
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
