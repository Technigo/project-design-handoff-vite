import './WhyPlayParkour';
import SVG1 from '../../assets/Vector.svg';
import SVG2 from '../../assets/Vector-2.svg';
import SVG3 from '../../assets/Vector-3.svg';
import SVG4 from '../../assets/Vector-4.svg';
import SVG5 from '../../assets/Vector-5.svg';
import SVG6 from '../../assets/Vector-6.svg';
import SVG7 from '../../assets/Vector-7.svg';

export const WhyPlayParkour = () => {
  return (
    <div className="whyplay-wrapper">
    <h2>Your Heading Here</h2>
    <div className="icons-wrapper">
        <div className="icon-text">
            <img src={SVG1} alt="quotation on yellow background"/>
            <p>Text for SVG1</p>
        </div>
        <div className="icon-text">
            <img src={SVG2} alt="quotation on green background"/>
            <p>Text for SVG2</p>
        </div>
        <div className="icon-text">
            <img src={SVG3} alt="quotation on yellow background"/>
            <p>Text for SVG3</p>
        </div>
        <div className="icon-text">
            <img src={SVG4} alt="Description of SVG2"/>
            <p>Text for SVG4</p>
        </div>
        <div className="icon-text">
            <img src={SVG5} alt="Description of SVG2"/>
            <p>Text for SVG5</p>
        </div>
        <div className="icon-text">
            <img src={SVG6} alt="Description of SVG2"/>
            <p>Text for SVG6</p>
        </div>
        <div className="icon-text">
            <img src={SVG7} alt="Description of SVG2"/>
            <p>Text for SVG7</p>
        </div>
    </div>
</div>
  )
}
