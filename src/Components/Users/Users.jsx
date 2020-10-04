import React from 'react'
import cls from './Users.module.scss';
import * as axios from 'axios'


class Users extends React.Component {

    componentDidMount(){
        this.props.setUsers(
            [
                { id: 1, followed: true, firstName: "Alexey", status: "I am .....1", lastName: "Samofalov", city: "Volgograd", birthday: "27.05.1991", img: "https://avatars2.githubusercontent.com/u/60327240?s=400&u=fa033814d3b8ccbd35b7d092738f46f175e21aea&v=4", myprofile: true },
                { id: 2, followed: true, firstName: "Vincent", status: "I am .....2", lastName: "van Gogh", city: "Zundert", birthday: "30.03.1853", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6duZtwAbzc63grhTlqO2z6qjxxJuIbEHupg&usqp=CAU", myprofile: false },
                { id: 3, followed: true, firstName: "Dave", status: "I am .....3", lastName: "Groll", city: "Warren", birthday: "14.01.1969", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Foo_Fighters_-_Rock_am_Ring_2018-5710.jpg/274px-Foo_Fighters_-_Rock_am_Ring_2018-5710.jpg", myprofile: false },
                { id: 4, followed: false, firstName: "Martin", status: "I am .....4", lastName: "Scorsese", city: "New York", birthday: "17.10.1942", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg/220px-Martin_Scorsese_Berlinale_2010_%28cropped%29.jpg", myprofile: false },
                { id: 5, followed: false, firstName: "Grumpy", status: "I am .....5", lastName: "Cat", city: "Morristown", birthday: "04.04.2013", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/274px-Grumpy_Cat_by_Gage_Skidmore.jpg", myprofile: false },
                { id: 6, followed: true, firstName: "Quentin", status: "I am .....6", lastName: "Tarantino", city: "Morristown", birthday: "27.04.2063", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg/220px-Quentin_Tarantino_by_Gage_Skidmore.jpg", myprofile: false }
            ]
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div className={cls.userBlockItem} key={u.id}>
                        <div className={cls.leftBlock}>
                            <div className={cls.avatar}>
                                <img src={u.img} alt="avatar" />
                            </div>
                            <div className={cls.btn}>
                                {u.followed ?
                                    <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    :
                                    <button onClick={() => { this.props.follow(u.id) }} >Follow</button>
                                }
                            </div>
                        </div>
                        <div className={cls.rightBlock} >
                            <div className={cls.userInfo}>
                                <div className={cls.userName}> {u.firstName} {u.lastName} </div>
                                <div className={cls.userCity}> {u.city} </div>
                            </div>
                            <div className={cls.userStatus}> {u.status} </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users