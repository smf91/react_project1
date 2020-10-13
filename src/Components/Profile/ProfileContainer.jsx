import React from 'react';
import { connect } from 'react-redux'
import { toogleIsFetching, setCurrentProfile, getProfileInfoTC } from './../../redux/profile-reducer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer'
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 2 }
        this.props.getProfileInfoTC(userId)
    }
    render() {
        return <>
            <ProfileInfo profileInfo={this.props.profileInfo} />
            {/* <NewPostContainer  /> */}
            <PostsContainer />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.currentProfile,
    }
}

//  оборачиваем компоненту с помощью compose
// вторым параметром передается обьект первым функции(функции применяются в обратном порядке)
export default compose(
    connect(mapStateToProps, {
        toogleIsFetching,
        setCurrentProfile,
        getProfileInfoTC
    }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

// то-же самое что и выше но только без compose
// // создается компонента с функцией отслеживания URL на основе контейнерной компоненты
// let withUrlDataContainerComponent = withRouter(ProfileContainer)

// // создается компонента с функцией редиректа на основе контейнерной компоненты
// let AuthRedirectComponent = withAuthRedirect(withUrlDataContainerComponent)

// export default connect(mapStateToProps, {
//                                         toogleIsFetching,
//                                         setCurrentProfile,
//                                         getProfileInfoTC
//                                     })(AuthRedirectComponent)
