
import PokemonCard from "./PokemonCard"

const PokemonList = ({ pokemons }) => {
    return (
        <div className="grid gap-8 600:grid-cols-2 850:grid-cols-3 1150:grid-cols-4 py-10">
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
    )
}

export default PokemonList
