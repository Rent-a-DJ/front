import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import axios from 'axios';
import App from "./App";
import {API_URL} from "./config";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
  if (config && config.headers)
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
}, error => {
  return Promise.reject(error);
});


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
