import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './styles/global.css'

// Elemento de renderizado de rutas principales
import Layout from './pages/Layout'

// Componentes de cada ruta
import Home from './pages/home-page/Home'
import Favorites from './pages/favorites-page/Favorites'
import Pokemondetail from './pages/pokemonDetail-page/Pokemondetail'

function App() {


  return (
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/pokemon/:pokemonName' element={<Pokemondetail />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
