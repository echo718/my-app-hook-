import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import HooksUseState from './component/HooksUseState';
//import HooksUseEffect from './component/HooksUseEffect';
//import HookReducer from './component/HookReducer';
import HookReducerAndContext from './component/HookReducerAndContext';

// import Form from './component/form';
// import Nav from './component/nav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Nav />,
    // <Form /> */}
     {/* <HooksUseState /> */}
     {/* <HooksUseEffect /> */}
    {/* <HookReducer /> */}
    <HookReducerAndContext />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
