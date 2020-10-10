import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { toogleIsFetching, setUserData } from './../../redux/auth-reducer'
import {UserAPI} from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        UserAPI.getAuthMe(this.props.currentPage, this.props.pageSize).then(data => {
                if (data.resultCode === 0)  {
                    this.props.setUserData(data)
                }
            })
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

export default connect(mapStateToProps, { toogleIsFetching, setUserData })(HeaderContainer)