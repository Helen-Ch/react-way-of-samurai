import s from "./ProfileInfo.module.css";
import LookingForAJob from "../../../assets/images/looking-for-a-job.png";
import Working from "../../../assets/images/working.jpeg";
import React from "react";

import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div><b>Full name: </b>{createField(
                "Full name",
                "fullName",
                [],
                Input,
            )}</div>

            <div className={s.About}>
                <img src={profile.lookingForAJob ? LookingForAJob : Working} alt=""/>
                <span><b>Looking for a job: </b>
                    {createField(
                        "",
                        "lookingForAJob",
                        [],
                        Input,
                        {type: "checkbox"}
                    )}
            </span>
                <div><b>My professional skills: </b>
                    {createField(
                        "My professional skills",
                        "lookingForAJobDescription",
                        [],
                        Textarea,
                    )}
                </div>
            </div>
            <div><b>About me: </b>
                {createField(
                    "About me",
                    "aboutMe",
                    [],
                    Textarea,
                )}
            </div>
            <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => (
                <div key={key}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>))}
            </div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;