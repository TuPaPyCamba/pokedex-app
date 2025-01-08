import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import PokeLog from '../../assets/img/PokeApi.png'

import MenuIcon from '../../assets/icons/menu.svg'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const getContclasses = (isOpen) =>
        `fixed inset-0 bg-black h-screen bg-opacity-20 transition-opacity duration-300 ${isOpen === true ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`

    const getLinkClasses = (isOpen) =>
        `absolute top-0 left-0 bg-white w-70w max-w-[350px] h-full p-6 shadow-2xl transform transition-transform duration-500 ${isOpen === true ? "translate-x-0" : "-translate-x-full"}`

    // const getLinkClasses = ()

    return (
        <>
            {/* Botón para abrir el menú */}
            <button
                onClick={toggleMenu}
                className="700:hidden"
                aria-expanded={isOpen}
                aria-controls="main-menu"
                id="menu-button"
            >
                <img src={MenuIcon} alt="Open menu" className="h-16" />
            </button>

            {/* Fondo oscuro y contenedor del menú */}
            <div
                className={getContclasses(isOpen)}
                style={{ zIndex: 999 }}
                onClick={toggleMenu}
                role="dialog"
                aria-labelledby="menu-button"
            >
                {/* Contenedor de links */}
                <div
                    className={getLinkClasses(isOpen)}
                    onClick={(e) => e.stopPropagation()} // Evita cerrar el menú al interactuar dentro
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        className="mb-12 cursor-pointer flex items-center gap-2"
                        aria-label="Go to homepage"
                        onClick={toggleMenu}
                    >
                        <img src={PokeLog} alt="Pokedex logo" className="h-12" />
                    </Link>

                    {/* Enlaces del menú */}
                    <nav aria-label="Main navigation">
                        <ul className="flex flex-col gap-8">
                            <li className="bg-PokeGray h-14 rounded-lg">
                                <Link
                                    to="/" onClick={toggleMenu}
                                    className="flex items-center pl-4 text-xl font-semibold h-full w-full hover:bg-slate-900 hover:text-white transition-all duration-300 ease-in-out rounded-lg"
                                    aria-label="Navigate to home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="bg-PokeGray h-14 rounded-lg">
                                <Link
                                    to="/favorites" onClick={toggleMenu}
                                    className="flex items-center pl-4 text-xl font-semibold h-full w-full hover:bg-slate-900 hover:text-white transition-all duration-300 ease-in-out rounded-lg"
                                    aria-label="Navigate to favorites"
                                >
                                    Favorites
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default MobileNav
