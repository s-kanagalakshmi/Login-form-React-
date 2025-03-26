import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './App.jsx'
import Success from './Success.jsx';
import Fail from './Fail.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/success" element={<Success />} />
      <Route path="/fail" element={<Fail />} />
    </Routes>
  </BrowserRouter>

)
