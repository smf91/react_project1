
let state = {
    profilePage : {
        postsData : [
            { id: 1, message: "first text posts", likesCount: 12 },
            { id: 2, message: "second text posts", likesCount: 23 }
        ],
    },
    messagesPage : {
        messageData : [
            { text: "hello" },
            { text: "what is yor name?" },
            { text: "kfkfkf?" }
        ],
        dialogsData :[
            { name: "Dimich", id: "1" },
            { name: "Genadich", id: "3" },
            { name: "Borisich", id: "4" },
            { name: "Inokentich", id: "5" },
            { name: "Mihalich", id: "2" }
        ]
    },
    person :[
        {id : 1, firstName : "Alexey", lastName: "Samofalov", city : "Volgograd", birthday: "27.05.1991" , img : "https://avatars2.githubusercontent.com/u/60327240?s=400&u=fa033814d3b8ccbd35b7d092738f46f175e21aea&v=4" , myprofile: true},
        {id : 2, firstName : "Vincent", lastName: "van Gogh", city : "Zundert", birthday: "30.03.1853", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6duZtwAbzc63grhTlqO2z6qjxxJuIbEHupg&usqp=CAU" , myprofile: false}
    ]
}

export default state;