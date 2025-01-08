import { Link, useLocation } from "react-router-dom"
import Point from '../../../assets/icons/point.svg'

const NavHistory = ({ lastRoute, pokemonName }) => {

    const isHomeRoute = lastRoute === 'home'
    return (
        <div className="flex flex-row gap-4 pb-6">
            <div>
                {isHomeRoute ? (
                    <button>
                        <Link to={'/'} className="font-semibold text-xl">
                            Home
                        </Link>
                    </button>
                ) : (
                    <button>
                        <Link to={`/${lastRoute}`}>
                            {lastRoute}
                        </Link>
                    </button>
                )}
            </div>
            <img src={Point} alt="" />
            <div>
                <Link to={`/pokemon/${pokemonName}`} className="font-semibold text-slate-500 text-xl">
                    {pokemonName}
                </Link>
            </div>
        </div>
    )
}

export default NavHistory
