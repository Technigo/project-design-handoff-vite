export const NavigationMenu = () => {
    return (
        <nav className="text-white text-sm">
            <ul className="flex items-center justify-end">
                <li className="mr-4 bg-black p-2">
                    About us
                </li>
                <li className="mr-4 bg-black p-2">
                    Membership
                </li>
                <li className="mr-4 bg-black p-2">
                    Facilities
                </li>
                <li className="mr-4 bg-black p-2">
                    Opening Hours
                </li>
                <li className="mr-4 text-black border-solid border-2 border-amber-400 p-2">
                    Sign In
                </li>
            </ul>
        </nav>
    );
};
