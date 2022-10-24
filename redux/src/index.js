import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';
import allReducer from './reducers'; 
import { Provider } from 'react-redux';
const store = createStore(allReducer)




//Action 
// const increment = () =>{
//   return {
//     type:'INCREMENT'
//   }
// }
// const decrement = () =>{
//   return {  
//     type:'DECREMENT'
//   }
// }
// // Reducer
// const counter = (state = 0, action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state  + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// } 
// let store = createStore(counter);
// store.subscribe(()=> console.log(store.getState()));


// //Dispatch
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
