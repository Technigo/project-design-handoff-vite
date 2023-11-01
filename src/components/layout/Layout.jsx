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
        <div className="flex flex-col h-screen justify-between">
            <div>
                <header className="bg-green-n w-full">
                    <div className="mx-auto p-4 flex justify-between items-center">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Hamburger className="h-8 w-8 hover:cursor-pointer hover:text-blue-n" />
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer className="flex justify-between bg-green-n w-full p-4 items-center">
                <div>
                    <div className="flex gap-4 items-center mb-4">
                        <Link className="hover:text-blue-n" to="/about">ABOUT US</Link>
                        <p className="cursor-pointer hover:text-blue-n">FAQ</p>
                        <p className="flex items-center cursor-pointer hover:text-blue-n">
                            <Planet />
                            <span className="mx-2">ENGLISH</span>
                            <ArrowDown />
                        </p>
                    </div>
                    <div>
                        <p className="mb-2">JOIN OUR COMMUNITY</p>
                        <div className="flex gap-4">
                            <Facebook className="cursor-pointer hover:text-blue-n" />
                            <Instagram className="cursor-pointer hover:text-blue-n" />
                            <Youtube className="cursor-pointer hover:text-blue-n" />
                        </div>
                    </div>
                </div>
                <Link to="/">
                    <Logo />
                </Link>
            </footer>
        </div>
    )
}

export default Layout;