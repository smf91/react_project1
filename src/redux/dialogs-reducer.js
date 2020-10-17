import { dialogsAPI } from '../api/api'

const SEND_MESSAGE = "SEND_MESSAGE-MESSAGE"

let initialState = {
    messageData: [
        { text: "hello" },
        { text: "what is yor name?" },
        { text: "swssw?" }
    ],
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
            // то же самое
            // let stateCopy = {...state, newMessageText :[...state.newMessageText] }
            // stateCopy.newMessageText = action.text;
            // return stateCopy
        case SEND_MESSAGE:{
            return{
                ...state,
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

export const sendMessage = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

// Thunk creater
export const sendMsgTC = () => {
    return (dispatch) => {
        // dispatch(toogleIsFetching(true))
        dialogsAPI.sendMsg().then(data => {
                if (data.resultCode === 0)  {
                    dispatch(sendMessage(data))
                }
            })
    }
}

export default dialogsReducer;