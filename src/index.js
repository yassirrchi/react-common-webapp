import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './Components/Counter';
 import { BrowserRouter,Link } from 'react-router-dom';
import Counters from './Components/Counters';
 import Movies from './Components/Movie';
 import App from './App';
 import "font-awesome/css/font-awesome.css";
import NavBar from './Components/NavBar';


ReactDOM.render(<div> <BrowserRouter><App/> </BrowserRouter></div>,document.getElementById('root'));