import { Header } from "./components/Header";
import { TopInfo } from "./components/TopInfo";
import AnimatedTextComponent
  from "./components/Animation";
  import CardComponent from "./components/Card";


export const App = () => {
  return <>
  <Header/>
    <TopInfo/>
    <CardComponent/>
    <AnimatedTextComponent />
  </>;
};
