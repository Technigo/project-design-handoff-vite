import {img1} from "../../../public/images/img1.svg";
import {img2} from "../../../public/images/img2.svg";
import {img3} from "../../../public/images/img3.svg";
import {img4} from "../../../public/images/img4.svg";
import {img5} from "../../../public/images/img5.svg";

export const Slideshow = () => {
    return (
      //infinite loop: overflow: hidden; 
    <div>
      <img src={img1} alt="Image 1" />
      <img src={img2} alt="Image 2" />
      <img src={img3} alt="Image 3" />
      <img src={img4} alt="Image 4" />
      <img src={img5} alt="Image 5" />
    </div>
    );
};
