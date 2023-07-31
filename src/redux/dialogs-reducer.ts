// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number,
    name: string,
}

type MessageType = {
    id: number,
    message: string,
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"},
    ] as Array<DialogType>,

    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ] as Array<MessageType>,
};

export type initialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY:
        //     return  {
        //         ...state,
        //         newMessageBody: action.body,
        //     }
        case  SEND_MESSAGE:
            // let body = state.newMessageBody;
            let body = action.newMessageBody;
            return {
                ...state,
                // newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string,
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});
// export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;