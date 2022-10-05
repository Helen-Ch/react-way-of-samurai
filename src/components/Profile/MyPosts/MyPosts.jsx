import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hi!", likesCount: 15},
        {id: 2, message: "How are you?", likesCount: 20},
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add button</button>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
}

export default MyPosts;