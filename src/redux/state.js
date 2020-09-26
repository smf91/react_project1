const UPDATE_TEXTAREA_NEW_POST = "UPDATE-TEXTAREA-NEW-POST"
const CREATE_POST = "CREATE-POST"
const CREATE_MESSAGE = "CREATE-MESSAGE"
const UPDATE_TEXTAREA_NEW_MESSAGE="UPDATE-TEXTAREA-NEW-MESSAGE"

let store = {
    _state: {
        profilePage: {
            // массив постов
            postsData: [
                { id: 1, message: "first text posts", likesCount: 12 },
                { id: 2, message: "second text posts", likesCount: 23 }
            ],
            // строка в которой храниться тест набираемого поста
            newPostText: ""
        },
        // массив сообщений
        messagesPage: {
            messageData: [
                { text: "hello" },
                { text: "what is yor name?" },
                { text: "kfkfkf?" }
            ],
            // строка в которой храниться тест набираемого сообщения
            newMessageText: "",

            dialogsData: [
                { name: "Dimich", id: "1" },
                { name: "Genadich", id: "3" },
                { name: "Borisich", id: "4" },
                { name: "Inokentich", id: "5" },
                { name: "Mihalich", id: "2" }
            ]
        },
        // массив с персонами
        person: [
            { id: 1, firstName: "Alexey", lastName: "Samofalov", city: "Volgograd", birthday: "27.05.1991", img: "https://avatars2.githubusercontent.com/u/60327240?s=400&u=fa033814d3b8ccbd35b7d092738f46f175e21aea&v=4", myprofile: true },
            { id: 2, firstName: "Vincent", lastName: "van Gogh", city: "Zundert", birthday: "30.03.1853", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6duZtwAbzc63grhTlqO2z6qjxxJuIbEHupg&usqp=CAU", myprofile: false },
            { id: 3, firstName: "Dave", lastName: "Groll", city: "Warren", birthday: "14.01.1969", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Foo_Fighters_-_Rock_am_Ring_2018-5710.jpg/274px-Foo_Fighters_-_Rock_am_Ring_2018-5710.jpg", myprofile: false },
            { id: 4, firstName: "Martin", lastName: "Scorsese", city: "New York", birthday: "17.10.1942", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg/220px-Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg", myprofile: false },
            { id: 5, firstName: "Grumpy", lastName: "Cat", city: "Morristown", birthday: "04.04.2013", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/274px-Grumpy_Cat_by_Gage_Skidmore.jpg", myprofile: false },
            { id: 6, firstName: "Quentin", lastName: "Tarantino", city: "Morristown", birthday: "27.04.2063", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/220px-Quentin_Tarantino_by_Gage_Skidmore.jpg", myprofile: false }
        ]
    },
    getState() {
        return this._state
    },
    // создаем Ф и импортируем ее в index.js где мы ее вызываем передавая в параметре функию рендер
    // далее в state.js  функции rerenderEntireTree(какая то пустая функция) присваевается значение observer (т.е. функция рендер)
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('state changed');
    },
    dispatch(action) { // {type : 'ADD-POST'}
        if (action.type === CREATE_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this)
        }
        else if (action.type === UPDATE_TEXTAREA_NEW_POST) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this)
        }
        else if (action.type === UPDATE_TEXTAREA_NEW_MESSAGE) {
            this._state.messagesPage.newMessageText = action.text;
            this._callSubscriber(this)
        }
        else if (action.type === CREATE_MESSAGE) {
            let newMessage = {
                text: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messageData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this)
        }
    }
}

export const createPostActionCreater = () =>{
    return { type: CREATE_POST }
}

export const updateTextareaNewPostActionCreater = (text) =>{
    return { type: UPDATE_TEXTAREA_NEW_POST, text: text }
}

export const createMessageActionCreater = () =>{
    return { type: CREATE_MESSAGE }
}

export const updateTextareaNewMessageActionCreater = (message) =>{
    return { type: UPDATE_TEXTAREA_NEW_MESSAGE, text: message }
}

export default store;
window.store = store