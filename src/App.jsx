import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Strength } from "./components/Strength";
import { Reviews } from "./components/Reviews";
import { Philosophy } from "./components/Philosophy";
import { articles as articlesData } from './components/Copy';
import { customerReviews as reviewData } from './components/Copy';
import { mainText as mainData } from './components/Copy';
import { subText as subData } from './components/Copy';
import leftblob from "/images/leftblob.svg";
import rightblob from "/images/rightblob.svg";
import mainImg from "/assets/main-image.svg"

export const App = () => {
  return (
    <div>
    <Hero heroImg={mainImg} mainText={mainData} subText={subData} />
    <Reviews customerReviews={reviewData} leftBlob={leftblob} rightBlob={rightblob} />
    <Philosophy articles={articlesData} />
    <Strength />
    <Footer />
  </div>
  )
};
