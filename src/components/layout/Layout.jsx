import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo-sm.svg?react";
import Hamburger from "../../assets/hamburger.svg?react";
import ArrowDown from "../../assets/arrow-down.svg?react";
import Planet from "../../assets/planet.svg?react";
import Facebook from "../../assets/facebook.svg?react";
import Instagram from "../../assets/instagram.svg?react";
import Youtube from "../../assets/youtube.svg?react";

const Layout = () => {
    return (
        <>
            <div>
                <header className="bg-green-n w-full sticky top-0 z-10">
                    <div className="mx-auto p-4 flex justify-between items-center">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <div className="hidden md:flex gap-4">
                            <Link to="/" className="font-bold py-3 px-2 rounded-full hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300 flex gap-1">
                                <span>CLASSES</span>
                                <ArrowDown />
                            </Link>
                            <Link to="/about" className="font-bold px-2 py-3 rounded-full hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">ABOUT US</Link>
                            <Link to="/" className="font-bold text-white-n border-2 text-blue-n border-blue-n px-8 py-3 rounded-full  hover:text-white-n hover:underline underline-offset-2 transition-all ease-out duration-300">LOG IN</Link>
                            <Link to="/" className="font-bold text-white-n bg-blue-n px-8 py-3 rounded-full hover:bg-beige-n hover:text-blue-n hover:underline underline-offset-2 transition-all ease-out duration-300">SIGN UP</Link>
                        </div>
                        <div className="md:hidden">
                            <Hamburger className="h-8 w-8 hover:cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                        </div>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer className="flex justify-between bg-green-n w-full p-4 items-center font-semibold sticky">
                <div>
                    <div className="flex gap-4 items-center mb-4">
                        <Link className="hover:text-blue-n transition-all ease-out duration-300" to="/about">ABOUT US</Link>
                        <p className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300">FAQ</p>
                        <p className="flex items-center cursor-pointer hover:text-blue-n transition-all ease-out duration-300">
                            <Planet />
                            <span className="mx-2">ENGLISH</span>
                            <ArrowDown />
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">JOIN OUR COMMUNITY</p>
                        <div className="flex gap-4">
                            <Facebook className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                            <Instagram className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                            <Youtube className="cursor-pointer hover:text-blue-n transition-all ease-out duration-300" />
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <Logo />
                </Link>
            </footer>
        </>
    )
}

export default Layout;