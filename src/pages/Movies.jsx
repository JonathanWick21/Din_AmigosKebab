import MainContent from "../components/mainContent.jsx"
import ReusableCard from "../components/ReusableCard.jsx"
import peliculas from "../data/peliculas.js"

function Peliculas() {
    return(
        <>
        <MainContent titulo = "Catálogo de películas">
            <p className="body-text">Listado</p>

            <div>
                {
                    peliculas.map( (titulo, index) =>
                        <ReusableCard
                        key={index}
                            titulo={peliculas.nombre}
                            foto={peliculas.cartelera}
                            esNota10={peliculas.nota === 10}>
                                {peliculas.resumen}
                        </ReusableCard>

                    )
                }
            </div>

        </MainContent>
        </>
    )
}
export default Peliculas
