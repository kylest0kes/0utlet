import React from 'react';
import ReactDOM from 'react-dom';
// import Posts from './pages/posts';
// import Login from './pages/login';
import Landing from './pages/landing';
// import SignUp from './pages/signup';
import reportWebVitals from './reportWebVitals';

import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Landing />
    {/* <SignUp /> */}
    {/* <Login /> */}
    {/* <Posts /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
