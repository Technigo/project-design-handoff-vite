import "./Footer.css"
import map from "../../public/assets/map.png"
import mapPin from "../../public/assets/mapPin.png"

export const Footer = () => {
  return (
    <footer>
        <h2>Find us</h2>
        <img src={map} alt="A map." />
        <img src={mapPin} alt="A map pin." />
        <p>Adress: Grycksbovägen 19A, Stockholm</p>

        <p className='p-bold'>Contact</p>
        <p>Mobile: +467000000</p>
        <p>E-mail: info@yogabalance.se</p>

        <p className='p-bold'>Select language</p>
        <p>DROPDOWN MENU</p>

        <div className='copyright'>
            <p>Copyright: YogaBalance23</p>
        </div>
    </footer>
  )
}
