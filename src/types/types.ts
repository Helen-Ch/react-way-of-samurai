export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    src: string,
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosType = {
    small: string | null,
    large: string | null,
}

export type ProfileType = {
    userId?: number,
    lookingForAJob?: boolean,
    lookingForAJobDescription?: string,
    fullName?: string,
    contacts?: ContactsType,
    photos: PhotosType,
}

export type LocationType = {
    city: string,
    country: string,
}

export type UserType = {
    id: number,
    photos: PhotosType,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
}