import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Working from "../../../assets/images/working.jpeg";
import LookingForAJob from "../../../assets/images/looking-for-a-job.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large} alt=""/>
                <div className={s.About}>{props.profile.aboutMe}
                    <img src={props.profile.lookingForAJob ? LookingForAJob : Working} alt=""/>
                    {props.profile.lookingForAJobDescription && <span>{props.profile.lookingForAJobDescription}</span>}
                </div>
            </div>
        </div>)
}

export default ProfileInfo;