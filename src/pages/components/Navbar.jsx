import { Link, useLocation } from "react-router-dom"

import PokedexIMG from '../../assets/img/PokeApi.png'

import MobileNav from "./MobileNav"

const Navbar = () => {

    const location = useLocation()
    const { pathname } = location

    const getLinkClasses = (path) =>
        `font-semibold ${pathname === path ? "font-semibold text-green-400" : ""}`

    return (
        <nav className="w-full flex justify-center items-center py-4" aria-label="Main navigation">
            <div className="flex max-w-[1200px] w-90w justify-between">
                <div className="flex flex-row items-center">
                    <MobileNav />
                    <Link to="/">
                        <img src={PokedexIMG} alt="Pokedex logo" className="h-10" />
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-10">
                    <div className="hidden 700:flex">
                        <ul className="flex gap-10">
                            <li>
                                <Link to="/" className={getLinkClasses('/')}>Home</Link>
                            </li>
                            <li>
                                <Link to="/favorites" className={getLinkClasses('/favorites')}>Favoritos</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-full bg-red-600 p-2 px-4">h</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar