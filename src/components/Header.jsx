function Header({children}) {
    return (
        <header className="w-full py-6 px-8 bg-[var(--color-primary)] shadow-md">
            {children}
        </header>
    )
}

export default Header