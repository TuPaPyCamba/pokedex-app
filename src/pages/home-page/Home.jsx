import { useEffect, useState } from "react"

import Pagination from '../components/Pagination'
import PokemonList from "../components/PokemonList"
import SearchBar from "../components/SearchBar"

import axios from "axios"

const Home = () => {

    const [allPokemons, setAllPokemons] = useState([])
    const [displayedPokemons, setDisplayedPokemons] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const pokemonPerPage = 8
    const nPages = Math.ceil(displayedPokemons.length / pokemonPerPage)

    const indexFi = currentPage * pokemonPerPage
    const indexIn = indexFi - pokemonPerPage

    const currentPokemons = displayedPokemons.slice(indexIn, indexFi)

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1302`)

                const pokemonNames = response.data.results.map(pokemon => pokemon.name)

                setAllPokemons(pokemonNames)
                setDisplayedPokemons(pokemonNames)

            } catch (error) {
                console.error("Error al cargar los datos:", error.message)
            }
        }

        fetchPokemons()
    }, [])
    return (
        <div className="w-90w flex flex-col mx-auto max-w-[1200px] 700:pt-10">
            <SearchBar setDisplayedPokemons={setDisplayedPokemons} allPokemons={allPokemons} setCurrentPage={setCurrentPage}/>
            <PokemonList pokemons={currentPokemons} />
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} nPages={nPages} />
        </div>
    )
}

export default Home
