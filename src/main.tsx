import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
<<<<<<< HEAD
import './i18n'
=======
// @ts-ignore
import i18n from "../i18n.js";
>>>>>>> main

i18n.changeLanguage('en');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
