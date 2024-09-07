import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'



// import HookMemo from './06-memos/HookMemo'
// import HooksApp from './HooksApp'
// import CounterApp from './01-useState/CounterApp'
// import ContadorComponent from './01-useState/ContadorComponent'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import MultipleCustomHook from './03-examples/MultipleCustomHook'
// import FocusScreen from './04-useRef/FocusScreen'
// import Memoriza from './06-memos/Memoriza'
// import CallBackHook from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import TodoApp from './08-useReducer/TodoApp';

import { AboutPage } from './09-useContext/AboutPage'
import { MainApp } from './09-useContext/MainApp'
import LoginPage from './09-useContext/LoginPage'
import HomePage from './09-useContext/HomePage'





// import './08-useReducer/intr-reducer';
// <React.StrictMode>
// </React.StrictMode>,

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <MainApp/>
      
  </BrowserRouter>

)
