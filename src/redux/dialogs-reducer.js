const CREATE_MESSAGE = "CREATE-MESSAGE"
const UPDATE_TEXTAREA_NEW_MESSAGE = "UPDATE-TEXTAREA-NEW-MESSAGE"


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TEXTAREA_NEW_MESSAGE:
            state.newMessageText = action.text;
            return state
        case CREATE_MESSAGE:
            let newMessage = {
                text: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}



export const createMessageActionCreater = () => ({ type: CREATE_MESSAGE })
export const updateTextareaNewMessageActionCreater = (message) => ({ type: UPDATE_TEXTAREA_NEW_MESSAGE, text: message })

export default dialogsReducer;