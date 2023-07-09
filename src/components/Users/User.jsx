import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                         alt={user.name}
                         className={styles.UserPhoto}/>
                        </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}
                        >
                            Unfollow
                        </button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}
                        >
                            Follow
                        </button>
                    }
                </div>
            </span>
        <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"userlocation.country"}</div>
                    <div>{"userlocation.city"}</div>
                </span>
            </span>
    </div>
}

export default User;