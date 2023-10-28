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

    </div>
  );
};
