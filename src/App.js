import React from 'react';
import './App.scss';
import Navigation from './Components/Navigation/Navigation';
import HeaderContainer from './Components/Header/HeaderContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import UsersContainer from './Components/Users/UsersContainer';
import Login from './Components/Login/LoginContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import {initializeApp} from './redux/app-reducer'
import Fething from './Components/Common/Fetching/Fetching'

import { connect } from 'react-redux'
// import { authMeTC } from './redux/auth-reducer'
import { Provider } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (this.props.initialized !== true ){
      return <Fething />
    }
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <div className="wrapper">
            <HeaderContainer />
            <Navigation />
            <div className="wrapper_content">
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/Music' component={Music} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/News' component={News} />
              <Route path='/login' component={Login} />
              <Route path='/Settings' component={Settings} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized : state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App)

// const App = (props) => {
//   return (
//     <BrowserRouter>
//     <Provider store = {props.store}>
//       <div className="wrapper">
//         <HeaderContainer />
//         <Navigation />
//         <div className="wrapper_content">
//           <Route path = '/dialogs' render = { () => <DialogsContainer /> } />
//           <Route path = '/Music' component={Music} />
//           <Route path = '/profile/:userId?' render = { () => <ProfileContainer /> }/>
//           <Route path = '/users' render = { () => <UsersContainer /> }/>
//           <Route path = '/News' component={News} />
//           <Route path = '/login' component={Login} />
//           <Route path = '/Settings' component={Settings} />
//         </div>
//       </div>
//       </Provider>
//     </BrowserRouter>
//   );
// }
// export default App;