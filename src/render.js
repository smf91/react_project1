import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import state from './redux/state'
import {CreatePost, updateTexareaNewPost, createMessage, updateTexareaNewMessage} from './redux/state'

export let rerenderEntireTree =(state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} 
          createPost = {CreatePost} 
          updateTexareaNewPost ={updateTexareaNewPost}
          createMessage ={createMessage}
          updateTexareaNewMessage ={updateTexareaNewMessage}
          />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
