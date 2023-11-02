import { BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes/routes";
import { Navigation } from "./components/Navigation/Navigation";


export const App = () => {
  return (
    <>
   
      <BrowserRouter>
      <Routes>{routes}</Routes>
     <Navigation />
      </BrowserRouter>
    </>

  )
  

 
};
