import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"}/>
            </div>
            <div>
                <button>Add button</button>
            </div>
        </form>
    );
}

const AddNewPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                   src={p.src}/>);

    // let newPostElement = createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<div>*/}
            {/*    <textarea ref={newPostElement}*/}
            {/*              onChange={onPostChange}*/}
            {/*              value={props.newPostText}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={onAddPost}>Add button</button>*/}
            {/*</div>*/}
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;