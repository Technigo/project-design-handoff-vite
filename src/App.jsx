// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   NavLink,
//   Navigate,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs } from "./sections/AboutUs";
import { Header } from "./sections/Header";
import { Member } from "./sections/Member/Member";
import { SectionTwo } from "./sections/SectionTwoFolder/SectionTwo";
import { MemberSwiper } from "./sections/MemberSwiperFolder/MemberSwiper";
import { MiniFitSwiper } from "./sections/MiniFitFolder/MiniFitSwiper";

// import Button from "./assets/images/Button.svg";

export const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Member />
                <SectionTwo />
                <MemberSwiper />
                <MiniFitSwiper />
                <AboutUs />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

// import { HowToPlayParkour } from './components/HowToPlayParkour/HowToPlayParkour';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './Translate/i18next';

// export const App = () => {
//   return (
//     <Router>
//     <div>
//       <Header />
//       <Routes>
//         <Route path="/" element={
//           <>
//                 <PlayParkour />
//                 <HowToPlayParkour />
//                 <WhyPlayParkour />
//                 <AboutUs />
//             </>
//         } />
//         <Route path="/about" element={<AboutUsPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   </Router>
//   );
// };   <Link to="/about">{translations.Footer.link1}</Link>
//                     <Link to="/about">{translations.Footer.link2}</Link>
//                     <Link to="/about">{translations.Footer.link3}</Link>
//                     <Link to="/about">{translations.Footer.link4}</Link>
