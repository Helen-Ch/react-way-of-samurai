import * as serviceWorker from './serviceWorker';
// import store from "./redux/store";
import store from "./redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
