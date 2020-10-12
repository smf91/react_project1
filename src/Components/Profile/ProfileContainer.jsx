import React from 'react';
import { connect } from 'react-redux'
import { toogleIsFetching, setCurrentProfile, getProfileInfoTC} from './../../redux/profile-reducer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import NewPostContainer from './NewPost/NewPostContainer';
import PostsContainer from './Posts/PostsContainer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount(){
        // this.props.toogleIsFetching(true)
        let userId = this.props.match.params.userId
        if (!userId){userId = 2}
        this.props.getProfileInfoTC(userId)
    }
    render (){
        return<>
        <ProfileInfo profileInfo={this.props.profileInfo}/>
        {/* <NewPostContainer  /> */}
        <PostsContainer />     
        </>
}
}

const mapStateToProps = (state) => {
    return {
        profileInfo : state.profilePage.currentProfile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {toogleIsFetching, 
                                        setCurrentProfile,
                                        getProfileInfoTC
                                        })(withUrlDataContainerComponent)
