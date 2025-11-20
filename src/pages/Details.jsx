import { useParams} from "react-router-dom";
import peliculas from "../data/peliculas.js";
function Details() {
    const { id } = useParams();

    const pelicula = peliculas.find( peli => peli.id === parseInt(id) );
    // si es pelicula
    if (!id.startsWith('i')) {
    return(
         <>
        <main className="container mx-auto p-6">
      <section className="md:flex md:items-start md:gap-8">
        <figure className="md:w-2/5 lg:w-1/3 flex-shrink-0">
          <img
            src={pelicula.cartelera}
            alt={pelicula.nombre}
            className="w-full h-96 md:h-[36rem] lg:h-[44rem] object-cover rounded-lg shadow-md"
          />
        </figure>

        <div className="mt-4 md:mt-0 md:w-3/5 lg:pl-8">
          <h1 className="text-2xl font-bold">{pelicula.nombre}</h1>
          <p className="mt-2 text-sm text-gray-600">Nota: <span className="font-semibold">{pelicula.nota}</span></p>
          <p className="mt-4 text-gray-700">{pelicula.resumen}</p>
        </div>
      </section>


      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Actores principales</h2>

        <div className="flex flex-wrap gap-4">
          {pelicula.actores.map((actor, index) => (
            <article
              key={index}
              className="w-40 bg-white rounded-lg p-3 shadow-sm flex-shrink-0"
              aria-label={`Actor ${actor.nombre}`}
            >
              <img
                src={actor.imagen}
                alt={actor.nombre}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="mt-2 text-sm font-medium">{actor.nombre}</h3>
              <p className="mt-1 text-xs text-gray-600 line-clamp-3">{actor.biografia}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
        
        </>
    )
}

const idActor = parseInt(id.substring(1));
const actor = pelicula.actores[idActor];

if (id.startsWith('i')) {
    return(
        <>
        <main className="container mx-auto p-6">
        <section className="md:flex md:items-start md:gap-8">
        <figure className="md:w-2/5 lg:w-1/3 flex-shrink-0">
          <img
            src={actor.imagen}
            alt={actor.nombre}
            className="w-full h-96 md:h-[36rem] lg:h-[44rem] object-cover rounded-lg shadow-md"
          />
        </figure>

        <div className="mt-4 md:mt-0 md:w-3/5 lg:pl-8">
          <p className="mt-2 text-sm text-gray-600">Nota: <span className="font-semibold">{pelicula.nota}</span></p>
          <p className="mt-4 text-gray-700">{actor.biografia}</p>
        </div>
      </section>
    </main>
        </>
    )
}

    //si es interprete
} export default Details;