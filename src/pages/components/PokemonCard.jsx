import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import FavoriteButton from "./FavoriteButton"

const PokemonCard = ({ pokemon }) => {
    const [ pokemonImg, setPokemonImg ] = useState('')

    useEffect(()=>{
        // Funcion para obtener los datos a mostar del pokemon IMG en este caso
        const fetchPokemonImg = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                const imgUrl = response.data.sprites.other.home.front_default

                setPokemonImg(imgUrl)
            } catch {
                console.error("Error al cargar la imagen del Pokémon:", error.message);
            }
        }

        fetchPokemonImg()
    })


    return (
        <Link to={`/pokemon/${pokemon}`}>
            <div className="w-full flex flex-col rounded-xl bg-PokeGray shadow-lg" style={{aspectRatio: '16/15'}}>
                <div className="h-full flex items-center justify-center bg-white rounded-t-xl p-20 850:p-10">
                    <img src={pokemonImg} alt={pokemon} className=""/>
                </div>
                <div className="flex flex-row py-6 px-6 justify-between">
                    <div className="font-semibold text-xl">{pokemon}</div>
                    <FavoriteButton pokemonName={pokemon}/>
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard
