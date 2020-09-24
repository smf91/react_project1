import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import state from './redux/state'
import { CreatePost, updateTexareaNewPost, createMessage, updateTexareaNewMessage} from './redux/state'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                createPost={CreatePost}
                updateTexareaNewPost={updateTexareaNewPost}
                createMessage={createMessage}
                updateTexareaNewMessage={updateTexareaNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// вызываем функцию которая перерисовывает все дерево
rerenderEntireTree(state)

subscribe(rerenderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
