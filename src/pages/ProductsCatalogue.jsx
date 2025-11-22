import { Link } from "react-router-dom"
import MainContent from "../components/MainContent.jsx"
import ReusableCard from "../components/ReusableCard.jsx"
import products from "../data/dataProducts.js"


function ProductsCatalogue() {
    return (
        <MainContent titulo="Nuestra carta">
            <p className="text-lg md:text-xl font-semibold text-gray-700 mb-6">Productos</p>


            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {products.map((product) => (
                    <Link
                        to={`/details/${product.id}`}
                        key={product.id}
                        aria-label={`Ver detalles de ${product.nombre}`}
                        className="block"
                    >
                        <ReusableCard
                            nombre={product.nombre}
                            foto={product.imagen}
                            precio={product.precio}
                        >
                            {product.descripcion}
                        </ReusableCard>
                    </Link>
                ))}
            </div>
        </MainContent>
    )
}
export default ProductsCatalogue