import { BrowserRouter, Routes } from "react-router-dom";
import { Nav } from "./components/Nav/Nav"
import { routes } from "./routes/routes"

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
    </>
  )
  ;
};
