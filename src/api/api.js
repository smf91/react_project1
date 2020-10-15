import * as axios from 'axios'
// create instans with shared parametr
const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "0e104740-5992-4240-ae2e-159caee4d5cb" }
})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instans.get(`users?page=${currentPage}&count =${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAuthMe() {
        console.warn('Method is deprecated. Use it authAPI.autMe()')
        return authAPI.authMe()
    },
    unfollow(userID) {
        console.warn('Method is deprecated. Use it followAPI.unfollow()')
        return followAPI.unfollow(userID)
    },
    follow(userID) {
        console.warn('Method is deprecated. Use it followAPI.follow()')
        return followAPI.follow(userID)
    },
    getProfileInfo(userID) {
        console.warn('Method is deprecated. Use it profileAPI.getProfileInfo()')
        return profileAPI.getProfileInfo(userID)
    }
}

export const authAPI = {
    authMe() {
        return instans.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    unfollow(userID) {
        return instans.delete(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID) {
        return instans.post(`follow/${userID}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instans.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userID) {
        return instans.get(`profile/status/${userID}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status) {
        // в качестве второго параметра мы передаем обьект у которого есть свойство status
        return instans.put(`profile/status`, {status : status} )
            .then(response => {
                return response.data
            })
    }
}