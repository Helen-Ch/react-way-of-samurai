import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} src={p.src}/>);

    let newPostElement = createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        const action = {type: 'UPDATE-NEW-TEXT-POST', newText: text};
        props.dispatch(action);
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