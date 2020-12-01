export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}
export type CurrentProfileType = {
    userID: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType
    photos: PhotosType
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    youtube: string,
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large : string | null
}

export type PersonType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType

}

export type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number
}