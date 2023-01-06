import React, {createRef} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    const action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }}
        </StoreContext.Consumer>

    );
}

export default MyPostsContainer;