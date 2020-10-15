import React from 'react';
import { connect } from 'react-redux'
import { updateStatusTC, getStatusTC,toogleIsFetching, setCurrentProfile, getProfileTC } from './../../redux/profile-reducer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer'
// import NewPost from './NewPost/NewPost'
import { withRouter } from 'react-router-dom';
// import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 11952 }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
        // this.props.updateStatusTC()
    }
    render() {
        return <>
            <ProfileInfo profileInfo={this.props.profileInfo}
                        status={this.props.status}
                        updateStatus = {this.props.updateStatusTC}
            />
            {/* <NewPost  /> */}
            <PostsContainer />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.currentProfile,
        status: state.profilePage.status
    }
}

//  оборачиваем компоненту с помощью compose
// вторым параметром передается обьект первым функции(функции применяются в обратном порядке)
export default compose(
    connect(mapStateToProps, {
        updateStatusTC,
        getStatusTC,
        toogleIsFetching,
        setCurrentProfile,
        getProfileTC
    }),
    // withAuthRedirect,
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
