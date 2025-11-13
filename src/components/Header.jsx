function Header({children}) {
    return (
        <header className="w-full py-6 px-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
            {children}
        </header>
    )
}

export default Header