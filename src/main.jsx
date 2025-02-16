// Add to main.jsx
import './styles/base/reset.css';
import './styles/base/variables.css';
import './styles/base/global.css';
import './styles/utilities/animations.css';
import './styles/utilities/layouts.css';
import './styles/App.css';
import './styles/CV.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)