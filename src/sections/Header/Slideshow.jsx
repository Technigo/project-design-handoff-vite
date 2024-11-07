import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import img4 from "../../../public/images/img4.png";
import img5 from "../../../public/images/img5.png";



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
