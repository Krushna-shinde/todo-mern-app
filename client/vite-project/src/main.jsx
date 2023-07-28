import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
import {ToastContainer  } from 'react-toastify';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
    <App />
    <ToastContainer/>
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
