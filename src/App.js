import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />
        <div className="wrapper_content">
          <Route path = '/dialogs' component={Dialogs} />
          <Route path = '/Music' component={Music} />
          <Route path = '/profile' component={Profile} />
          <Route path = '/News' component={News} />
          <Route path = '/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}
//d
export default App;