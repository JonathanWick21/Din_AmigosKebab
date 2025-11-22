function MainContent({ children, titulo }) {

    return (
        <main
            id="main-content"
            role="main"
            tabIndex="-1"
            className="main_content">
            <section aria-labelledby="main-section-title"
                className="w-full max-w-7xl mx-auto text-center px-4">

                {titulo && (
                    <h1
                        id="main-section-title"
                        className="font-heading-h1 
    text-[var(--color-black-3)] 
    leading-[var(--heading-h1-line-height)] 
    [text-shadow:0px_4px_4px_#00000040] 
    text-4xl 
    md:text-5xl 
    font-extrabold 
    mb-6 
    underline 
    decoration-4 
    decoration-[var(--color-primary)]
    underline-offset-4"
                    >
                        {titulo}
                    </h1>
                )}
                {children}
            </section>
        </main>
    )

}

export default MainContent;