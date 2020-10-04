import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// вызываем функцию которая перерисовывает все дерево
rerenderEntireTree(store)

// store.subscribe(()=>{
//     let state = store
//     rerenderEntireTree(state)
// });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
