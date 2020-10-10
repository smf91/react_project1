import React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import HeaderContainer from './Components/Header/HeaderContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import {BrowserRouter, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
// import store from './redux/redux-store';


const App = (props) => {
  return (
    <BrowserRouter>
    <Provider store = {props.store}>
      <div className="wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="wrapper_content">
          <Route path = '/dialogs' render = { () => <Dialogs /> } />
          <Route path = '/Music' component={Music} />
          <Route path = '/profile/:userId?' render = { () => <ProfileContainer /> }/>
          <Route path = '/users' render = { () => <UsersContainer /> }/>
          <Route path = '/News' component={News} />
          <Route path = '/Settings' component={Settings} />
        </div>
      </div>
      </Provider>
    </BrowserRouter>
  );
}
export default App;