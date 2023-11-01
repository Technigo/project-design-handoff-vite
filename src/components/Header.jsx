
export const Header = () => {

    const links = [
        {
            id: 1,
            href: "#timetable",
            style: "hover:font-bold",
            linkTitle: "TIMETABLE",
        },
        {
            id: 2,
            href: "#classes",
            style: "hover:font-bold",
            linkTitle: "CLASSES",
        },
        {
            id: 3,
            href: "#book",
            style: "hover:font-bold",
            linkTitle: "BOOK",
        },
        {
            id: 4,
            href: "#contact",
            style: "hover:font-bold",
            linkTitle: "CONTACT",
        },
        {
            id: 5,
            href: "#info",
            style: "hover:font-bold",
            linkTitle: "INFO",
        },
        {
            id: 6,
            href: "#news",
            style: "hover:font-bold",
            linkTitle: "NEWS",
        }
    ]

    return (

        <header className="bg-grey opacity-90 text-white sticky top-0 z-10">
            <section className=" mx-auto px-6 py-4 flex items-center justify-between">
                <img src="icons/LogoFinal.png" alt="Nordic Pole Academy logo" />
                <div>
                    <button className="lg:hidden cursor-pointer relative">
                        <img src="icons/menuTopBar.png" alt="open hamburger menu" />
                    </button>
                    <nav className="hidden lg:flex justify-between items-center gap-x-4 text-lg font-raleway font-light tracking-wider" aria-label="main page navigation">
                        {links.map((link) => (
                            <a key={link.id} href={link.href} className={link.style} target="_blank" rel="noopener noreferrer">{link.linkTitle}</a>
                        ))}
                        {/* <a href="#timetable" target="_blank" rel="noopener noreferrer" className="hover:font-bold">TIMETABLE</a>
                        <a href="#classes" target="_blank" rel="noopener noreferrer" className="hover:font-bold">CLASSES</a>
                        <a href="#book" target="_blank" rel="noopener noreferrer" className="hover:font-bold">BOOK</a>
                        <a href="#contact" target="_blank" rel="noopener noreferrer" className="hover:font-bold">CONTACT</a>
                        <a href="#info" target="_blank" rel="noopener noreferrer" className="hover:font-bold">INFO</a>
                        <a href="#news" target="_blank" rel="noopener noreferrer" className="hover:font-bold">NEWS</a> */}
                    </nav>
                </div>
                <section id="mobile-menu" className="absolute top-68 bg-grey opacity-90 w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden">
                    <button className="lg:block cursor-pointer">
                        <img src="icons/iconClose.svg" alt="close scrolldown menu" />
                    </button>
                    <nav className="flex flex-col min-h-screen items-center justify-center lg:block space-x-11 text-5xl" aria-label="main page navigation">
                        {links.map((link) => (
                            <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer">{link.linkTitle}</a>
                        ))}
                        {/* <a href="#timetable" target="_blank" rel="noopener noreferrer">TIMETABLE</a>
                        <a href="#classes" target="_blank" rel="noopener noreferrer">CLASSES</a>
                        <a href="#book" target="_blank" rel="noopener noreferrer">BOOK</a>
                        <a href="#contact" target="_blank" rel="noopener noreferrer">CONTACT</a>
                        <a href="#info" target="_blank" rel="noopener noreferrer">INFO</a>
                        <a href="#news" target="_blank" rel="noopener noreferrer">NEWS</a> */}
                    </nav>
                </section>

            </section>
        </header>

    )
}
