//Mounted in App.jsx

import { Logo } from "../Reusable comp/Logo"
import "./header.css"

export const Header = () => {
    return (
        <>
            <div>This is the Header ...Logo and Nav?...</div>
            <div className="header-wrapper">
                <p>Link</p>
                <p>Link</p>
                <Logo />
                <p>Link</p>
                <p>Link</p>
            </div>
        </>
    )
}
