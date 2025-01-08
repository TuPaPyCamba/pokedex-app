import NavHistory from "./components/NavHistory"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FavoriteButton from "../components/FavoriteButton"

const Pokemondetail = () => {
  const {pokemonName} = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    // Funcion para obtener los datos a mostar del pokemon IMG, habilidades, genero, tamaño, forma, tipo
    console.log(pokemonName)
    const fetchPokemondata = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        setPokemon(response.data)
      } catch {
        console.error("Error al cargar la infodel Pokémon:", error.message);
      }
    }

    fetchPokemondata()
  }, [pokemonName])
  return (
    <>
      {pokemon ? (
      <div className="w-90w mx-auto max-w-[1200px]">
      <NavHistory lastRoute={'home'} pokemonName={pokemonName} />
      <section className="grid grid-cols-1 1000:grid-cols-2 pb-20 700:flex-row gap-4 justify-between">
        {/* img */}
        <div className="rounded-xl shadow-lg border 1150:h-full 1000:border-0 1000:shadow-none">
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} className="mx-auto my-auto moving hover:animate-none" />
        </div>
        <div className="flex flex-col gap-10">
          {/* Nombre y fav */}
          <div className="flex justify-between items-center py-4">
            <header className="font-bold text-2xl 1000:text-3xl">
              {pokemon.name}
            </header>
            <div>
              <FavoriteButton pokemonName={pokemonName}/>
            </div>
          </div>
          <main className="flex flex-col gap-10">
            {/* info */}
            <div>
              <h2 className="font-semibold text-xl">Habilidades</h2>
              <p>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            </div>
            {/* Stats */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-between font-semibold textlg 600:text-xl">
                <h1>
                  Tipos
                </h1>
                <p>
                  {pokemon.types.map(type => type.type.name).join(', ')}
                </p>
              </div>
              <div className="flex justify-between font-semibold textlg 600:text-xl">
                <h1>
                  Altura
                </h1>
                <p>
                  {pokemon.height / 10} m
                </p>
              </div>
              <div className="flex justify-between font-semibold textlg 600:text-xl">
                <h1>
                  Peso
                </h1>
                <p>
                  {pokemon.weight / 10} kg
                </p>
              </div>
              <div className="flex justify-between font-semibold textlg 600:text-xl">
                <h1>
                  Evoluciones
                </h1>
                <p>
                  {pokemon.evolutions ? pokemon.evolutions.join(', ') : 'Información no disponible'}
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
    ) : (
      <p>cargando...</p>
    )}
    </>
  )
}

export default Pokemondetail
