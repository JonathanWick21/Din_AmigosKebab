import { Outlet, Link } from "react-router-dom";
import Header from "./Header.jsx";

function NavigationBar() {
    return (
        <>
        <nav>
            <Header>
                <nav className="navigation-bar">
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Peliculas Navegables</h1>
                    </Link>
                    <div>
                        <Link to="/peliculas">Películas</Link>
                        <Link to="/interpretes">Intérpretes</Link>
                    </div>
                </nav>
            </Header>
            <Outlet />
        </nav>
        </>
    );
}

export default NavigationBar;
