import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import ShoppingList from './App';
// function AboutPage(){
//   return(
//     <>
//     <h1>About</h1>
//     <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }
// function HelloWorld(){
//   return <h1 className= "greeting">Hello, World!</h1>
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
