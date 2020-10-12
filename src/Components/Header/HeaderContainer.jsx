import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { toogleIsFetching, setUserData, authMeTC } from './../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeTC()
    }
    render() {
        return <>
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isFething: state.auth.isFething
    }
}

export default connect(mapStateToProps, { toogleIsFetching, 
                                            setUserData,
                                            authMeTC
                                        })(HeaderContainer)