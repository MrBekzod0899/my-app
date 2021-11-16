import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route } from 'react-router-dom';
import 'aos'
import "aos/dist/aos.css";
ReactDOM.render(
  <BrowserRouter>
       <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();