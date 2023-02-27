import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: "Dmitry",
                status: "I'm a boss",
                location: {
                    city: "Kharkiv",
                    country: "Ukraine",
                },
                photoUrl: "https://cdn-icons-png.flaticon.com/512/146/146037.png?w=1060&t=st=1677421226~exp=1677421826~hmac=c46bede07716ddc81a12f906e9158a5d41173398137221fb0a5db6ee9a76ca19"
            },
            {
                id: 2,
                followed: true,
                fullName: "Paul",
                status: "I'm a boss too",
                location: {
                    city: "Krakow",
                    country: "Poland",
                },
                photoUrl: "https://cdn-icons-png.flaticon.com/512/146/146037.png?w=1060&t=st=1677421226~exp=1677421826~hmac=c46bede07716ddc81a12f906e9158a5d41173398137221fb0a5db6ee9a76ca19"
            },
            {
                id: 3,
                followed: false,
                fullName: "Maria",
                status: "I'm a boss too",
                location: {
                    city: "Paris",
                    country: "France",
                },
                photoUrl: "https://cdn-icons-png.flaticon.com/512/146/146037.png?w=1060&t=st=1677421226~exp=1677421826~hmac=c46bede07716ddc81a12f906e9158a5d41173398137221fb0a5db6ee9a76ca19"
            },
        ]);
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} ult={u.fullName} className={styles.UserPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export  default Users;