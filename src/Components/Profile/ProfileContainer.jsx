import React from 'react';
import { connect } from 'react-redux'
import { toogleIsFetching, setCurrentProfile} from './../../redux/profile-reducer'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPostContainer from './NewPost/NewPostContainer';
import PostsContainer from './Posts/PostsContainer'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        let userId = this.props.match.params.userId
        if (!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setCurrentProfile(response.data)
            })
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

export default connect(mapStateToProps, {toogleIsFetching, setCurrentProfile})(withUrlDataContainerComponent)
