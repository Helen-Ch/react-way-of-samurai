import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50); // for escape endless loop

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                component={Textarea}
                validate={[required, maxLength50]}
                name="newMessageBody"
                placeholder="Enter your message"
            /></div>
            <div><button>Send</button></div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    // let newMessageBody = state.newMessageBody;
    // const onSendMessageClick = () => {
    //     props.onSendMessage();
    // };
    // const updateNewMessageBody = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // };

    const addNewMessage = (values) => {
        props.onSendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>{dialogsElements}</div>
            <div className={s.dialogs__messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                    {/*<div><textarea value={newMessageBody}*/}
                    {/*                onChange={updateNewMessageBody}*/}
                    {/*               placeholder='Enter your message'></textarea></div>*/}
                    {/*<div><button onClick={onSendMessageClick}>Send</button></div>*/}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;