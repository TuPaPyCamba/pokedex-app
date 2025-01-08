import { useEffect, useState } from "react"
import CoraI from '../../assets/icons/cora.svg'
import CoraC from '../../assets/icons/coraco.svg'

const FavoriteButton = ({ pokemonName }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        // Busca en localstorage si existe un dato llamado favorites si lo hay lo transforma a json, si no crea una lista 
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        // de la lista de favoritos verifica si algun registro coincide con el del pokemon y regresa true si estva en la lista
        const isFavorited = favorites.some((favPokemon) => favPokemon === pokemonName)
        setIsFavorite(isFavorited)
    }, [pokemonName])

    const addToFavorites = (event) => {
        event.stopPropagation(); // Evita la propagación del clic al padre
        event.preventDefault()
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.push(pokemonName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(true);
    };

    const removeFromFavorites = (event) => {
        event.stopPropagation(); // Evita la propagación del clic al padre
        event.preventDefault()
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter((favPokemon) => favPokemon !== pokemonName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorite(false);
    };

    return (
        <button onClick={isFavorite ? removeFromFavorites : addToFavorites} className={`flex items-center justify-center hover:scale-90`}>
            {isFavorite ? (
                <img src={CoraC} alt="" />
            ) : (
                <img src={CoraI} alt="" />
            )}
        </button>
    )
}

export default FavoriteButton
