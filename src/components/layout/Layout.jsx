import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/logo-sm.svg?react";
import Hamburger from "../../assets/hamburger.svg?react";

const Layout = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <header className="bg-green-n w-full">
                    <div className="mx-auto p-4 flex justify-between items-center">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <Hamburger className="h-8 w-8 hover:cursor-pointer" />
                    </div>
                </header>
                <main className="px-4">
                    <Outlet />
                </main>
            </div>
            <footer className="bg-green-n w-full p-4">
                <div>
                    <Link to="/about">ABOUT US</Link>
                </div>
            </footer>
        </div>
    )
}

export default Layout;