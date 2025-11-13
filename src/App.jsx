import Contenedor from "./pages/Contenedor";
// import Interprete from "./Interprete";
import Interprete from "./components/InterpreteAccesible";
import peliculas from "./data/peliculas";

function App() {
  return (
    <Contenedor titulo="Intérpretes de películas destacadas">
      
      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        
        
          {peliculas
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10} // pasamos si la nota es 10
              >
                {actor.biografia}
              </Interprete>
            ))
          )}
        </div>
    </Contenedor>
  )
}

export default App
