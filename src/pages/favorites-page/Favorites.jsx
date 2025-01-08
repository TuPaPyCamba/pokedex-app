import { useEffect, useState } from "react"

import SearchBar from "../components/SearchBar"
import PokemonList from "../components/PokemonList"
import Pagination from "../components/Pagination"

const Favorites = () => {

  const [pokemonsfav, setPokemonsFav] = useState([])
  const [displayedPokemons, setDisplayedPokemons] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const pokemonPerPage = 8
  const nPages = Math.ceil(displayedPokemons.length / pokemonPerPage)

  const indexFi = currentPage * pokemonPerPage
  const indexIn = indexFi - pokemonPerPage

  const currentPokemons = displayedPokemons.slice(indexIn, indexFi)

  useEffect(()=>{
    const getfavPokemons = async () => {
      try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        setPokemonsFav(favorites)
        setDisplayedPokemons(favorites)
      }catch(error){
        console.error("Error al cargar los datos:", error.message)
      }
    }

    getfavPokemons()
  },[])

  return (
    <div className="w-90w flex flex-col mx-auto max-w-[1200px] 700:pt-10">
      <SearchBar setDisplayedPokemons={setDisplayedPokemons} allPokemons={pokemonsfav} setCurrentPage={setCurrentPage} />
      <PokemonList pokemons={currentPokemons} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages} />
    </div>
  )
}

export default Favorites
