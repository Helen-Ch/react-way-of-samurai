import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Working from "../../../assets/images/working.jpeg";
import LookingForAJob from "../../../assets/images/looking-for-a-job.png";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>{profile.fullName}</div>
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div className={s.About}>{profile.aboutMe}
                    <img src={profile.lookingForAJob ? LookingForAJob : Working} alt=""/>
                    {profile.lookingForAJobDescription && <span>{profile.lookingForAJobDescription}</span>}
                </div>
            </div>
        </div>)
}

export default ProfileInfo;