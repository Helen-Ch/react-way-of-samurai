import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add button</button>
            </div>
            <div className={s.posts}>
                <Post message={`Hi, how are you?`} likesCount={15}/>
                <Post message={`It's my first message`} likesCount={20}/>
            </div>
        </div>
    );
}

export default MyPosts;