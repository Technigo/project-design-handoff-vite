import { Navigation } from "./NavigationComponents/Navigation";
import { Header } from "./HeaderComponents/Header";
import { Grid } from "./GridComponents/Grid";
import { Info } from "./InfoComponents/Info";

export const App = () => {
  return (
    <>
      <div className="m-35">
        <Navigation />
        <Header />
        <Grid />
        <Info />
      </div>

    </>
  )
};
