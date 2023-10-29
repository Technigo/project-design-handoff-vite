import './App.css'
import Ellipse6 from "./Ellipse6.png" 
import threelineicon from "./threelineicon.svg"
import Frame7 from "./Frame7.png"
import card1 from "./card1.png"
import card2 from "./card2.png"
import card3 from "./card3.png"
import card4 from "./card4.png"
import card5 from "./card5.png"
import card6 from "./card6.png"



export const App = () => {
  return (
    <div className="container">
      <div className="image-group">
        <p className='ep'>EP</p>
        <div className="right-group">
          <img src={Ellipse6} className='ellipse6'/>
          <img src={threelineicon} className='threelineicon' />
        </div>
      </div>
      <div className="text-frame-group">
        <div className="frame"></div>
        <div className="text-container">
          <p className='main'>EDGE PERFORMANCE</p>
        </div>
      </div>
      <img src={Frame7} />
      <p className='frame7description'>Find and sharpen your competitive edge. We are the gym that builds champions. </p>
      <div className='frame2'></div>
      <div className='description2'>
        <p>You have put in the hours, you have put in the sweat. You are already a relentless competitor. </p>
        <p>You have strength, explosivity, speed and balance - but we will help you gain more. </p>
        <p>Are you a serious hockey player ready to take your game to the next level? </p>
      </div>
      <div className="frame"></div>
      <p className='description3'>Click below to see what we offer our Edge athletes:</p>
      <div className="card-container">
        <div className="card"><img src={card1} /></div>
        <div className="card"><img src={card2} /></div>
        <div className="card"><img src={card3} /></div>
        <div className="card"><img src={card4} /></div>
        <div className="card"><img src={card5} /></div>
        <div className="card"><img src={card6} /></div>
      </div>
      <div className="frame"></div>
    <div className="footer">
    <div className='ep2-svg-container'>
          <p className='ep2'>EP</p>
          <div className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.96729 7.5322C5.96729 4.29336 9.7029 1.67383 14.3217 1.67383C18.9405 1.67383 22.6761 4.29336 22.6761 7.5322C22.6761 11.0221 17.4009 15.8343 15.2407 17.6672C14.7633 18.0689 13.892 18.0689 13.4147 17.6672C11.2425 15.8343 5.96729 11.0221 5.96729 7.5322ZM11.338 7.5322C11.338 8.68713 12.6747 9.62447 14.3217 9.62447C15.9687 9.62447 17.3054 8.68713 17.3054 7.5322C17.3054 6.37726 15.9687 5.43992 14.3217 5.43992C12.6747 5.43992 11.338 6.37726 11.338 7.5322Z" fill="#BB0000"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.9507 13.2478L19.9193 13.005C19.1912 12.9465 18.4751 13.1222 17.9619 13.4821L15.7659 15.022C12.3883 13.8168 9.61945 11.8836 7.90083 9.50676L10.1088 7.95848C10.622 7.59861 10.8726 7.09646 10.7891 6.58595L10.443 4.47694C10.2997 3.63166 9.28527 2.99561 8.06791 2.99561H6.00318C4.65454 2.99561 3.53266 3.7823 3.6162 4.72801C4.24875 11.8752 12.4003 17.5829 22.5807 18.0265C23.9294 18.0851 25.0513 17.2984 25.0513 16.3527V14.9048C25.0632 14.0596 24.1561 13.3482 22.9507 13.2478Z" fill="#BB0000"/>
          </svg>
          </div>
          <p className='address'>156 Marknadsvägen • Täby, Stockholm 12345, Sweden</p>
        </div>
      <p className='footer-text'>© 2023 Edge Performance. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#AboutUs">About Us</a>
        <a href="#Contact">Contact</a>
        <a href="#PrivacyPolicy">Privacy Policy</a>
    </div>
</div>
    </div>
  );
};
