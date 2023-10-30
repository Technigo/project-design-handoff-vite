import { Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    // BrowserRouter is a wrapper component that makes the routing work
    <BrowserRouter>
      <Header />
      <main>
        {/* Gets the defined routes from the routes-file and mounts them using Routes from React Router Dom */}
        <Routes>{routes}</Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
