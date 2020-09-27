const UPDATE_TEXTAREA_NEW_POST = "UPDATE-TEXTAREA-NEW-POST"
const CREATE_POST = "CREATE-POST"

const profileReducer = (state, action) => {
    switch (action.type) {
        case CREATE_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_TEXTAREA_NEW_POST:
            state.newPostText = action.text;
            return state
        default:
            return state
    }
}




export const createPostActionCreater = () => ({ type: CREATE_POST })
export const updateTextareaNewPostActionCreater = (text) => ({ type: UPDATE_TEXTAREA_NEW_POST, text: text })

export default profileReducer;