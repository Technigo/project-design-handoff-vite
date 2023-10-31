import { Outlet } from "react-router-dom";
import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
