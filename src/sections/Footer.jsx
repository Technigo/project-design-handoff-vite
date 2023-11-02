import logo from "/ff-logo-footer.png"
import "./footer.css"


export const Footer = () => {
    const linkArray = ["About us", "Find your center", "Customer Support", "Membership", "Cookies, privacy and security"]

    return (
        <>
        <div className="grid-parent red">
            <div className="footer section">
                <img className="footer-logo" src={logo} alt="Family Fitness Logo" />
                <ul>
                    {linkArray.map(item => (<li key={item}><a>{item}</a></li>))}
                </ul>
            </div>
        </div>
        </>
    )
}