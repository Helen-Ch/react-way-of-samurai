import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} src={p.src}/>);

    let newPostElement = createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Add button</button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;