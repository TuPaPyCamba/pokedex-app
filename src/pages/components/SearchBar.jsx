import { useState } from "react"

const SearchBar = ({setDisplayedPokemons, allPokemons, setCurrentPage}) => {

    const [searchTerm, setSearchTerm] = useState()

    const handleChange = (event) => {
        const newSearchTerm = event.target.value
        setSearchTerm(newSearchTerm) 
        setCurrentPage(1)

        // Filtra los pokemones que coincidan con el término de búsqueda
        const filteredPokemons = allPokemons.filter(item => item.toLowerCase().includes(newSearchTerm.toLowerCase()))

        // Actualiza el estado con los pokemones filtrados
        setDisplayedPokemons(filteredPokemons)
    }

    return (
        <input type="text" onChange={handleChange} className="h-14 rounded-lg border-2 px-4 font-semibold 700:w-50w" placeholder="Search..." />
    )
}

export default SearchBar
