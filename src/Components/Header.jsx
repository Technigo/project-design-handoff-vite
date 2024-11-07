import "./Header.css";

export const Header = () => {
    return (
        <div>
            <nav>
                <img className="logo" src="../Images/KC-logo.png" alt="Picture of Logo" />
                <p> Kindness & Compassion</p>
                <img className="search-icon" src="../Images/search-icon.svg" alt="Picture of Search-icon" />
                <img className="meny-icon" src="../Images/hamburger-menu.svg" alt="Picture of Hamburgermenu-icon" />
            </nav>

            <div className="hero-container">
                <img className="hero-image" src="../Images/Hero-image.png" alt="Hero" />
                <div className="hero-text">
                    <h1>Sprid en god gärning för en vänligare värld</h1>
                    <p>Vi skapar mötesplatser för äkta samtal och goda handlingar</p>
                    <button>Läs mer om oss</button>
                </div>
            </div>
        </div>
    );
};
