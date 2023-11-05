import { Hero } from '../components/Hero'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Benefits } from '../components/Benefits'
import { Testimonies } from '../components/Testimonies';


export const Home = () => (
  <div>
<Hero />
<Benefits />
<Testimonies />
  </div>
);
