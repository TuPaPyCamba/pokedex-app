import lefRow from '../../assets/icons/nav-arrow-left.svg'
import rigRow from '../../assets/icons/nav-arrow-right.svg'

const Pagination = ({ setCurrentPage, currentPage, nPages }) => {

    const next = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }

    const prev = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        nPages > 0 && (
            <div className="flex flex-row justify-center items-center gap-4 p-6 text-lg font-semibold">
                {/* Si no estamos en la primera página, mostrar los botones prev y 1 */}
                {currentPage !== 1 && (
                    <>
                        <button onClick={prev}><img src={lefRow} alt="nav prev pag" className="h-8" /></button>
                        <button onClick={() => setCurrentPage(1)}>1</button>
                    </>
                )}

                {/* Mostrar el número de la página actual */}
                <div className="flex flex-row gap-4 text-lg">
                    <button onClick={() => setCurrentPage(currentPage)} className="bg-slate-950 text-white rounded-full h-8 w-8">
                        {currentPage}
                    </button>
                </div>

                {/* Si no estamos en la última página, mostrar los botones de la última página y siguiente */}
                {currentPage !== nPages && (
                    <>
                        <button onClick={() => setCurrentPage(nPages)}>{nPages}</button>
                        <button onClick={next}><img src={rigRow} alt="nav next pag" className="h-8" /></button>
                    </>
                )}
            </div>
        )
    )
}

export default Pagination
