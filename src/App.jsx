import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Sobre from "./Pages/Sobre";
import Contactos from "./Pages/Contactos";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SobreNos" element={<Sobre />} />
        <Route path="/Servicos" element={<HomePage />} />
        <Route path="/Portfolio" element={<HomePage />} />
        <Route path="/Contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App