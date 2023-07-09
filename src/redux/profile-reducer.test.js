import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import expect from "expect";

let state = {
    posts: [
        {
            id: 1,
            message: "Hi!",
            likesCount: 15,
            src: "https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg"
        },
        {
            id: 2,
            message: "How are you?",
            likesCount: 20,
            src: "https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg"
        },
    ],
};

it('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
   let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('new post message should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

it('length of messages should be decrement after deleting', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

it(`length of messages shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(10000);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});