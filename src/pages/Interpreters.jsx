import MainContent from "../components/mainContent.jsx";
import ReusableCard from "../components/ReusableCard.jsx";
import interpretersData from "../data/peliculas.js";

function Interpreters() {
    return(
        <>
        <MainContent titulo="Página de Intérpretes">
            <p>Intérpretes</p>

            <div>
                {interpretersData.map( pelicula => 
                    pelicula.actores.map( (interprete, index) =>
                        <ReusableCard
                            key={index}
                            titulo={interprete.nombre}
                            imagen={interprete.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {interprete.biografia}
                        </ReusableCard>
                    ))
                }
            </div>

        </MainContent>
        </>
    )
}
export default Interpreters;