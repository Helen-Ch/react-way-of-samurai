import React, {useState} from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Working from "../../../assets/images/working.jpeg";
import LookingForAJob from "../../../assets/images/looking-for-a-job.png";
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt=""/>
                {isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>
                }
            </div>
        </div>)
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><b>Full name: </b>{profile.fullName}</div>
        <div className={s.About}>
            <img src={profile.lookingForAJob ? LookingForAJob : Working} alt=""/>
            <span><b>Looking for a job: </b> {profile.lookingForAJob
                ? "yes"
                : "no"}</span>
            {profile.lookingForAJob && <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>}
        </div>
        <div><b>About me: </b>{profile.aboutMe}</div>
        <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => (
            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>))}
        </div>
    </>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;