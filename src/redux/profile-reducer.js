import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: 1,
            message: "Hi!",
            likesCount: 15,
            src: "https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg"
        },
        {
            id: 2,
            message: "How are you?",
            likesCount: 20,
            src: "https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg"
        },
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                src: "https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg",
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case  UPDATE_NEW_TEXT_POST:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

/* thunk */
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;
