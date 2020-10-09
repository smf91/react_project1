const UPDATE_TEXTAREA_NEW_POST = "UPDATE-TEXTAREA-NEW-POST"
const CREATE_POST = "CREATE-POST"
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    currentProfile : null,
    isFetching : false,
    postsData: [
        { id: 1, message: "first text posts", likesCount: 12 },
        { id: 2, message: "second text posts", likesCount: 23 }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_TEXTAREA_NEW_POST:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy 
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching : action.IsFetching
            }
        case SET_CURRENT_PROFILE:
            return {
                ...state, currentProfile : action.currentProfileInfo
            }
        default:
            return state
    }
}

export const toogleIsFetching = (IsFetching) => ({ type: TOGGLE_IS_FETCHING, IsFetching })
export const setCurrentProfile = (currentProfileInfo) => ({ type: SET_CURRENT_PROFILE, currentProfileInfo})
export const createPostActionCreater = () => ({ type: CREATE_POST })
export const updateTextareaNewPostActionCreater = (text) => ({ type: UPDATE_TEXTAREA_NEW_POST, text: text })

export default profileReducer;