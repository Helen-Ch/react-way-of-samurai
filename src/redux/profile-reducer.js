const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;
