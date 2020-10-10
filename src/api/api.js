import * as axios from 'axios'

const instans = axios.create ({
    withCredentials: true ,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers :{"API-KEY": "0e104740-5992-4240-ae2e-159caee4d5cb"}
})

export const UserAPI ={

    getUsers (currentPage, pageSize) {
        return instans.get(`users?page=${currentPage}&count =${pageSize}`)
        .then (response => {
            return response.data
        })
    },
    getAuthMe () {
        return instans.get(`auth/me`)
        .then (response => {
            return response.data
        })
    },
    unfollow (userID) {
        return instans.delete(`follow/${userID}`)
        .then (response => {
            return response.data
        })
    },
    follow (userID) {
        return instans.post(`follow/${userID}`)
        .then (response => {
            return response.data
        })
    }

}


