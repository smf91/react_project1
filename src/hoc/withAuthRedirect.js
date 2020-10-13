import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToPropsForRedirect = (state) => ({profileData: state.auth.data})

// компонента для редиректа, создает компоненту hoc на основе контейнерной компоненты
const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.profileData === null) {
                return <Redirect to={"/login"} />
            }
            else {
                return <Component {...this.props} />
            }
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}

export default withAuthRedirect