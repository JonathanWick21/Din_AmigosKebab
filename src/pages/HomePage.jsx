import MainContent from "../components/MainContent";

function HomePage() {
    return (
        <>
            <MainContent titulo="Página de Inicio">
                <p className="body-text text-(--colorprimary)">
                    Esta es la pagina de inicio de la aplicación de películas navegables.
                </p>

                <img src="src/assets/images/inicioAmigoKebab.jpg"
                    alt="Inicio Amigos Kebab"
                    className="w-full max-w-none object-cover rounded-none m-0 p-0" />
            </MainContent>
        </>
    )
}
export default HomePage;