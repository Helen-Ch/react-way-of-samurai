import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_TEXT_POST = "UPDATE-NEW-TEXT-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
    // newPostText: "it-kamasutra.com",
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                // message: state.newPostText,
                message: action.newPostText,
                likesCount: 0,
                src: "https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg",
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                // newPostText: "",
            };
        // case  UPDATE_NEW_TEXT_POST:
        //     return {
        //         ...state,
        //         newPostText: action.newText,
        //     };
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

/* thunk */
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }
}


export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"website": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"vk": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"twitter": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"instagram": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"youtube": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"github": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"mainLink": response.data.messages[0]}}));
        // dispatch(stopSubmit("edit-profile", {"fullName": response.data.messages[0]}));
        // dispatch(stopSubmit("edit-profile", {"lookingForAJobDescription": response.data.messages[0]}));
        // dispatch(stopSubmit("edit-profile", {"lookingForAJob": response.data.messages[0]}));
        // dispatch(stopSubmit("edit-profile", {"aboutMe": response.data.messages[0]}));
        // dispatch(stopSubmit("edit-profile", {"userId": response.data.messages[0]}));
    }
}

export default profileReducer;
