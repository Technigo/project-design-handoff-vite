//Mounted in pages: AboutP.jsx and LandingP.jsx

import "./infofooter.css"

export const InfoFooter = () => {
    return <div className="infofooter">
        <div className="infofooter-text">
            <h3>ABOUT US</h3>
            <h3>+</h3>
        </div>

        <div className="infofooter-text">
            <h3>WHAT WE OFFER</h3>
            <h3>+</h3>
        </div>

        <div className="infofooter-text">
            <h3>READ MORE</h3>
            <h3>+</h3></div>

        <div className="infofooter-text">
            <h3>CONTACT</h3>
            <h3>+</h3></div>

        <div className="infofooter-join">
            <h3>JOIN OUR CLAN!</h3>
            <p>You are not yet a member of Galactic Fitness, please register yourself to the force!</p></div>
        <button>REGISTER NOW</button>
        <div className="infofooter-social-img">
            <img src="../socialinsta.svg" alt="Instagram"></img>
            <img src="../socialfb.svg" alt="Facebook"></img>
        </div>
    </div>
}