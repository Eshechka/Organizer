import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import TitleContainer from "./components/Title/TitleContainer";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import TodoContainer from './components/Todo/TodoContainer';
import GoalsPageContainer from './components/GoalsPage/GoalsPageContainer'

function App({user}) {
    return (
        <>
            <HeaderContainer/>
            <Nav user={user}/>
            <Routes>
                <Route exact path="/" element={
                    user === true ? <Navigate   to='/do'/> : <TitleContainer/>}
                />
                <Route exact path="/do" element={
                    user === false ? <Navigate   to='/'/> : <TodoContainer/>}
                />
                <Route exact path="/purposes" element={
                    user === false ? <Navigate  to='/'/> : <GoalsPageContainer/>}
                />
                <Route exact path="/profile" element={
                    user === false ? <Navigate  to='/'/> : <ProfilePage/>}
                />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
