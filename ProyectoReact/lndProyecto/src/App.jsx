import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MiniGame from './pages/MiniGame'
import Explorer from './pages/Explorer'
import Terminos from './pages/Terminos'
import Expresionismo from './pages/Expresionismo'
import Hiperrealismo from './pages/Hiperrealismo'
import Impresionismo from './pages/Impresionismo'
import Realismo from './pages/Realismo'
import Surrealismo from './pages/Surrealismo'
import Seguimiento from './pages/Seguimiento'
import Contato from './pages/Contacto'
import Rss from './pages/Rss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<MiniGame />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path='/politicasdeuso' element={<Terminos />} />
        <Route path='/expresionismo' element={<Expresionismo />} />
        <Route path='/hiperrealismo' element={<Hiperrealismo />} />
        <Route path='/impresionismo' element={<Impresionismo />} />
        <Route path='/realismo' element={<Realismo />} />
        <Route path='/surrealismo' element={<Surrealismo />} />
        <Route path='/seguimiento' element={<Seguimiento />} />
        <Route path='/contacto' element={<Contato />} />
        <Route path='/rss' element={<Rss />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
