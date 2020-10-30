import React from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import Header from './Header'
import { toogleIsFetching, setUserData, logoutTC } from './../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.authMeTC()
    // }
    logoutMe = () => {this.props.logoutTC()}
    render() {
        return <>
            <Header {...this.props} logout = {this.logoutMe} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isFething: state.auth.isFething
    }
}


export default compose (
    connect(mapStateToProps, { toogleIsFetching, 
                                setUserData,
                                // authMeTC,
                                logoutTC
    })
)
(HeaderContainer)