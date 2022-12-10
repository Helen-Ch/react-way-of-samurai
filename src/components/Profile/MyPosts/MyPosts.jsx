import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} src={p.src}/>);

    let newPostElement = createRef();

    let addPost = () => {
        // let text = newPostElement.current.value;
        // props.addPost(text);
        // newPostElement.current.value = '';
        props.addPost();
        // props.updateNewPostText(''); // put to business logic, state.js
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //console.log(text);
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}
                          onChange={onPostChange }
                          value={props.newPostText}
                />
            </div>
            <div>
                <button onClick={addPost}>Add button</button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;