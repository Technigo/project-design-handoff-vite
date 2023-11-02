import { Link } from "react-router-dom"
import { useState } from 'react';

export const Header = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const links = [
        {
            id: 1,
            href: "#timetable",
            pathTo: "",
            style: "hover:font-bold",
            linkTitle: "TIMETABLE",
        },
        {
            id: 2,
            href: "#classes",
            pathTo: "",
            style: "hover:font-bold",
            linkTitle: "CLASSES",
        },
        {
            id: 3,
            href: "#book",
            pathTo: "",
            style: "hover:font-bold",
            linkTitle: "BOOK",
        },
        {
            id: 4,
            href: "#contact",
            pathTo: "",
            style: "hover:font-bold",
            linkTitle: "CONTACT",
        },
        {
            id: 5,
            href: "#info",
            pathTo: "/info",
            style: "hover:font-bold",
            linkTitle: "INFO",
        },
        {
            id: 6,
            href: "#news",
            pathTo: "/news",
            style: "hover:font-bold",
            linkTitle: "NEWS",
        }
    ]

    return (

        <header className="bg-grey opacity-90 text-white sticky top-0 z-10">
            <section className=" mx-auto px-6 py-4 flex items-center justify-between">

                <Link to="/">
                    <img src="icons/LogoFinal.png" alt="Nordic Pole Academy logo" />
                </Link>

                {/* Desktop menu */}
                <div>
                    <button id="hamburger-button" className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                        <img src="icons/menuTopBar.png" alt="open hamburger menu" />
                    </button>
                    <nav className="hidden lg:flex justify-between items-center gap-x-4 text-lg font-raleway font-light tracking-wider" aria-label="main page navigation">
                        {links.map((link) => (
                            <Link key={link.id} to={link.pathTo}>
                                <a href={link.href} onClick={link.onClick} className={link.style} target="_blank" rel="noopener noreferrer">{link.linkTitle}</a>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile and Tablet menu */}
                    {isMenuOpen && (
                        <section id="mobile-menu" className=" bg-grey opacity-90 w-screen text-5xl flex-col justify-center z-20 lg:hidden">
                            {/* absolute top-68 bg-grey opacity-90 w-screen text-5xl flex-col justify-center origin-top z-20 */}
                            <button className="cursor-pointer">
                                <img src="icons/iconClose.svg" alt="close scrolldown menu" onClick={toggleMenu} />
                            </button>
                            <nav className="flex flex-col min-h-screen items-center justify-center space-y-11 text-5xl font-light" aria-label="main page navigation">
                                {links.map((link) => (
                                    <Link key={link.id} to={link.pathTo}>
                                        <a href={link.href} onClick={link.onClick} className={link.style} target="_blank" rel="noopener noreferrer">{link.linkTitle}</a>
                                    </Link>

                                ))}
                            </nav>
                        </section>
                    )}
                </div>
            </section>
        </header>
    )
}


// <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <a href="#" class="flex items-center">
//         <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
//         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a>
//     <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
//       <span class="sr-only">Open main menu</span>
//       <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//       </svg>
//     </button>
//     <div class="hidden w-full" id="navbar-hamburger">
//       <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
