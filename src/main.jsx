import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import { Login } from './auth/Login.jsx';
import { Dashboard } from './dashboard/Dashboard.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />



    </Routes>
  </BrowserRouter>
  // </StrictMode>,
)
