import React, { useEffect } from 'react'
import './App.scss'
import Navigation from './Components/Navigation/Navigation'
import HeaderContainer from './Components/Header/HeaderContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import Music from './Components/Music/Music'
import News from './Components/News/News'
import Settings from './Components/Settings/Settings'
import Login from './Components/Login/LoginContainer'
import { BrowserRouter, Route } from 'react-router-dom'
import { initializeApp } from './redux/app-reducer'
import Fething from './Components/Common/Fetching/Fetching'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { withSuspense } from './hoc/withSuspense'

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))

const App = ({ initializeApp, initialized, store }) => {
  useEffect(() => { initializeApp() }, [initialized, initializeApp])
  if (!initialized) return <Fething />
  else
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='wrapper'>
            <HeaderContainer />
            <Navigation />
            <div className='wrapper_content'>
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/Music' component={Music} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              {/* <Route path='/users'
                      render={() => {
                        return  <R eact.Suspense fallback ={ <div>LOADING</div> }>
                          <UsersContainer />
                          </R>
                      }} /> */}
              {/* или через HOC */}
              <Route path='/users' render={withSuspense(UsersContainer)}  pageTitle={'Самураи'}/>
              <Route path='/News' component={News} />
              <Route path='/login' component={Login} />
              <Route path='/Settings' component={Settings} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App)