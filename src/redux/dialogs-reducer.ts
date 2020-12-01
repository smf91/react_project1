import { dialogsAPI } from '../api/api'

const SEND_MESSAGE: string = "SEND_MESSAGE-MESSAGE"

type DialogDataType = {
    id: number,
    name: string
}
type MessageDataType = {
    text: string,
}

let initialState = {
    messageData: [
        { text: "hello" },
        { text: "what is yor name?" },
        { text: "swssw?" }
    ] as Array<MessageDataType>,
    dialogsData: [
        { name: "Dimich", id: 1 },
        { name: "Mihalich", id: 2 },
        { name: "Genadich", id: 3 },
        { name: "Borisich", id: 4 },
        { name: "Inokentich", id: 5 }
    ] as Array<DialogDataType>
}
export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messageData: [...state.messageData, { text: action.newMessageText }]
            }
        }
        default:
            return state
    }
}

type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageText: string
}
export const sendMessage = (newMessageText: string): SendMessageActionType => ({ type: SEND_MESSAGE, newMessageText })

// Thunk creater
export const sendMsgTC = () => {
    return (dispatch: any) => {
        dialogsAPI.sendMsg().then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(sendMessage(data))
            }
        })
    }
}

export default dialogsReducer;