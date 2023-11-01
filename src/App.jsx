import { BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./routes/routes"
import { LandingPage } from "./pages/LandingPage"

export const App = () => {
  return (
    <>
    <BrowserRouter>
     <main className="main-wrapper">
      <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>

    <LandingPage/> {/*Put this in in the meanwhile so something shows up */}
    </>
  )
};
