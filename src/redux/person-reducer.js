let initialState = {
    person : [
        { id: 1, firstName: "Alexey", lastName: "Samofalov", city: "Volgograd", birthday: "27.05.1991", img: "https://avatars2.githubusercontent.com/u/60327240?s=400&u=fa033814d3b8ccbd35b7d092738f46f175e21aea&v=4", myprofile: true },
        { id: 2, firstName: "Vincent", lastName: "van Gogh", city: "Zundert", birthday: "30.03.1853", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6duZtwAbzc63grhTlqO2z6qjxxJuIbEHupg&usqp=CAU", myprofile: false },
        { id: 3, firstName: "Dave", lastName: "Groll", city: "Warren", birthday: "14.01.1969", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Foo_Fighters_-_Rock_am_Ring_2018-5710.jpg/274px-Foo_Fighters_-_Rock_am_Ring_2018-5710.jpg", myprofile: false },
        { id: 4, firstName: "Martin", lastName: "Scorsese", city: "New York", birthday: "17.10.1942", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg/220px-Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg", myprofile: false },
        { id: 5, firstName: "Grumpy", lastName: "Cat", city: "Morristown", birthday: "04.04.2013", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/274px-Grumpy_Cat_by_Gage_Skidmore.jpg", myprofile: false },
        { id: 6, firstName: "Quentin", lastName: "Tarantino", city: "Morristown", birthday: "27.04.2063", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/220px-Quentin_Tarantino_by_Gage_Skidmore.jpg", myprofile: false }
    ]
}

const personReducer = (state = initialState, action) => {
    return state
}

export default personReducer;