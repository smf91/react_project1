const CREATE_MESSAGE = "CREATE-MESSAGE"
const UPDATE_TEXTAREA_NEW_MESSAGE = "UPDATE-TEXTAREA-NEW-MESSAGE"

let initialState = {
    messageData: [
        { text: "hello" },
        { text: "what is yor name?" },
        { text: "swssw?" }
    ],
    newMessageText: "",
    dialogsData: [
        { name: "Dimich", id: "1" },
        { name: "Genadich", id: "3" },
        { name: "Borisich", id: "4" },
        { name: "Inokentich", id: "5" },
        { name: "Mihalich", id: "2" }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TEXTAREA_NEW_MESSAGE:
            return{
                ...state,
                newMessageText : action.text
            }
            // то же самое
            // let stateCopy = {...state, newMessageText :[...state.newMessageText] }
            // stateCopy.newMessageText = action.text;
            // return stateCopy
        case CREATE_MESSAGE:{
            return{
                ...state,
                newMessageText : '',
                messageData :[...state.messageData, {text:state.newMessageText}]
                
            }

            // то же самое
            // let newMessage = {
            //     text: state.newMessageText
            // }
            // let stateCopy = {...state, messageData :[...state.messageData]}
            // stateCopy.messageData.push(newMessage)
            // stateCopy.newMessageText = ''
            // return stateCopy
        }
        default:
            return state
    }
}



export const createMessageActionCreater = () => ({ type: CREATE_MESSAGE })
export const updateTextareaNewMessageActionCreater = (message) => ({ type: UPDATE_TEXTAREA_NEW_MESSAGE, text: message })

export default dialogsReducer;