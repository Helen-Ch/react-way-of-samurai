import React from 'react';
import store from "./redux/redux-store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/profile'>
                                <Route index element={<ProfileContainer/>}/>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/users'
                                   element={<UsersContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

export const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}