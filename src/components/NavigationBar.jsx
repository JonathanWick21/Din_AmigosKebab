import { Outlet, Link, NavLink } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from "react";


function AdminNavigationBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <nav>
            <Header>
                <nav className="navigation-bar flex justify-between items-center">
                    <Link to="/">
                        <h1 className="font-heading-h1 text-3xl md:text-4xl font-bold text-[var(--color-secondary)]">Peliculas Navegables</h1>
                    </Link>


                    <button className="md:hidden"
                     onClick={() => setOpen(!open)}>
                    ☰
                    </button>
                    <div className={`flex flex-col md:flex md:flex-row gap-4 ${open ? "block" : "hidden"} md:flex`}>
                        <NavLink to="/" className="text-[var(--color-secondary)] hover:text-[var(--color-grey-3)]"  onClick={() => setOpen(false)} aria-label="Inicio">Inicio</NavLink>
                        <NavLink to="/productos" className="text-[var(--color-secondary)] hover:text-[var(--color-grey-3)]" onClick={() => setOpen(false)} aria-label="Películas">Catalogo</NavLink>
                    </div>
                </nav>
            </Header>
            <Outlet />
        </nav>
        </>
    );
}

export default AdminNavigationBar;
