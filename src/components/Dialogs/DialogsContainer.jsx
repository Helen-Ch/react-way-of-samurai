import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return <Dialogs onSendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} dialogsPage={state}/>;
}

export default DialogsContainer;