const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                src: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case  UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text});
export default profileReducer;
