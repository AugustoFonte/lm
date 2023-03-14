import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/HomePage.jsx";



function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SobreNos" element={<HomePage />} />
        <Route path="/Servicos" element={<HomePage />} />
        <Route path="/Portfolio" element={<HomePage />} />
        <Route path="/Contactos" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App