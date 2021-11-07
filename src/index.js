import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from "./Store";
import {Provider} from "react-redux";
import axios from "axios";
import App from './MainApp';
import './index.css'

// axios.defaults.baseURL = 'http://localhost:4000/v1';
axios.defaults.baseURL = 'https://thiaza.herokuapp.com/v1';



const app = (
	<Provider store={configureStore()}>
		<App />
	</Provider>
)
ReactDOM.render(
      app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

