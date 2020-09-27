import React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />
        <div className="wrapper_content">
          <Route path = '/dialogs' render = { () => <Dialogs  store = {props.store} 
                                                              // state = {props.store.getState().messagesPage} 
                                                              // person = {props.store.getState().person}
                                                              // dispatch= {props.store.dispatch.bind(props.store)}
                                                              /> } />
          <Route path = '/Music' component={Music} />
          <Route path = '/profile' render = { () => <Profile  store = {props.store} 
                                                              // state = {props.store.getState().profilePage} 
                                                              // person = {props.store.getState().person}
                                                              // dispatch = {props.store.dispatch.bind(props.store)}
                                                              /> }/>
          <Route path = '/News' component={News} />
          <Route path = '/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;