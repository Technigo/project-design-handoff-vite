
export const Background = () => {
    return (
        <body className="min-h-screen relative bg-gradient-to-b from-blue-grey to-grey">
            <header className="bg-grey opacity-90 text-white sticky top-0 z-10">
                <section className=" mx-auto px-6 py-4 flex items-center justify-between">
                    <img src="icons/LogoFinal.png" alt="Nordic Pole Academy logo" />
                    <div>
                        <button className="lg:hidden cursor-pointer relative">
                            <img src="icons/menuTopBar.png" alt="open hamburger menu" />
                        </button>
                        <nav className="hidden lg:block space-x-11 text-lg font-raleway font-normal tracking-wider" aria-label="main page navigation">
                            <a href="#timetable" target="_blank" rel="noopener noreferrer" className="hover:font-bold">TIMETABLE</a>
                            <a href="#classes" target="_blank" rel="noopener noreferrer" className="hover:font-bold">CLASSES</a>
                            <a href="#book" target="_blank" rel="noopener noreferrer" className="hover:font-bold">BOOK</a>
                            <a href="#contact" target="_blank" rel="noopener noreferrer" className="hover:font-bold">CONTACT</a>
                            <a href="#info" target="_blank" rel="noopener noreferrer" className="hover:font-bold">INFO</a>
                            <a href="#news" target="_blank" rel="noopener noreferrer" className="hover:font-bold">NEWS</a>
                        </nav>
                    </div>
                    <section id="mobile-menu" className="absolute top-68 bg-grey opacity-90 w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
                        <button className="lg:block cursor-pointer">
                            <img src="icons/iconClose.svg" alt="close scrolldown menu" />
                        </button>
                        <nav className="flex flex-col min-h-screen items-center justify-center lg:block space-x-11 text-5xl" aria-label="main page navigation">
                            <a href="#timetable" target="_blank" rel="noopener noreferrer">TIMETABLE</a>
                            <a href="#classes" target="_blank" rel="noopener noreferrer">CLASSES</a>
                            <a href="#book" target="_blank" rel="noopener noreferrer">BOOK</a>
                            <a href="#contact" target="_blank" rel="noopener noreferrer">CONTACT</a>
                            <a href="#info" target="_blank" rel="noopener noreferrer">INFO</a>
                            <a href="#news" target="_blank" rel="noopener noreferrer">NEWS</a>
                        </nav>
                    </section>

                </section>
            </header>


        </body>
    )
}
