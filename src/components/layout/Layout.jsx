import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo-sm.svg?react";
import Hamburger from "../../assets/hamburger.svg?react";
import ArrowDown from "../../assets/arrow-down.svg?react";
import Planet from "../../assets/planet.svg?react";
import Facebook from "../../assets/facebook.svg?react";
import Instagram from "../../assets/instagram.svg?react";
import Youtube from "../../assets/youtube.svg?react";
import { useTranslation } from "react-i18next";

const Layout = () => {
    const { t, i18n } = useTranslation(); // Importing translation functions from a library, possibly react-i18next.

    return (
        <>
            <div>
                {/* Header section */}
                <header className="bg-green-n w-full sticky top-0 z-10">
                    <div className="mx-auto p-4 flex justify-between items-center">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <div className="hidden md:flex items-center gap-4">
                            {/* Links for navigation */}
                            <Link to="/" className="font-bold py-3 px-2 rounded-full hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300 flex gap-1">
                                <span>{t("classes")}</span>
                                <ArrowDown />
                            </Link>
                            <Link to="/about" className="font-bold px-2 py-3 rounded-full hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">{t("about")}</Link>
                            <Link to="/" className="font-bold border-2 text-blue-n border-blue-n px-8 py-3 rounded-full  hover:text-white-n hover:underline underline-offset-2 transition-all ease-out duration-300">{t("logIn")}</Link>
                            <Link to="/" className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">{t("signUp")}</Link>
                        </div>
                        <div className="md:hidden">
                            {/* Hamburger icon for mobile view */}
                            <Hamburger className="h-8 w-8 hover:cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                        </div>
                    </div>
                </header>

                {/* Main content section */}
                <main className="max-w-[1000px] mx-auto">
                    <Outlet /> {/* Placeholder for nested routes/components */}
                </main>
            </div>

            {/* Footer section */}
            <footer className="flex justify-between bg-green-n w-full p-4 items-center font-semibold sticky">
                <div>
                    <div className="flex gap-4 items-center mb-4">
                        <Link className="hover:text-blue-n transition-all ease-out duration-300" to="/about">{t("about")}</Link>
                        <p className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300">FAQ</p>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-blue-n transition-all ease-out duration-300">
                            <Planet />
                            {/* Dropdown for language selection */}
                            <select
                                value={i18n.language}
                                onChange={(e) => i18n.changeLanguage(e.target.value)}
                                className="bg-transparent cursor-pointer focus:outline-none"
                            >
                                <option value="en">{t("english")}</option>
                                <option value="sv">{t("swedish")}</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2">{t("joinOurCommunity")}</p>
                        <div className="flex gap-4">
                            {/* Social media icons */}
                            <Facebook className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                            <Instagram className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                            <Youtube className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                        </div>
                    </div>
                </div>

                {/* Logo that scrolls to the top when clicked */}
                <Logo onClick={() => window.scrollTo(0, 0)} />
            </footer>
        </>
    )
}


export default Layout;