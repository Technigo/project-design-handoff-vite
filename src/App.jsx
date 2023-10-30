import { Navigation } from "./NavigationComponents/Navigation";
import { Header } from "./HeaderComponents/Header";
import { Grid } from "./GridComponents/Grid";
import { Info } from "./InfoComponents/Info";
import { Member } from "./Member/Member";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    <>
      <div className="m-35">
        <Navigation />
        <Header />
        <Grid />
        <Info />
        <Member />
        <Footer />
      </div>

    </>
  )
};
