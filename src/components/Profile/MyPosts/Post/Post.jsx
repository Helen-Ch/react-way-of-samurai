import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png" alt=""/>
            {props.message}
            <div><span>like {props.likesCount}</span></div>
        </div>
    );
}

export default Post;