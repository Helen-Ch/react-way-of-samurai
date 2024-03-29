 import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     const action = updateNewPostTextActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;