import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Sobre from "./Pages/Sobre";
import Contactos from "./Pages/Contactos";
import Servicos from "./Pages/Servicos"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Portfolio" element={<HomePage />} />
        <Route path="/Contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App