import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData =[
  {id:1, message: "first text posts", likesCount: 12},
  {id:2, message: "second text posts", likesCount: 23}
]

let dialogsData = [
  { name: "Dimich", id: "1" },
  { name: "Genadich", id: "3" },
  { name: "Borisich", id: "4" },
  { name: "Inokentich", id: "5" },
  { name: "Mihalich", id: "2" }
]

let messageData = [
  { text: "hello"},
  { text: "what is yor name?"},
  { text: "kfkfkf?"}
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData = {dialogsData} messageData = {messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
