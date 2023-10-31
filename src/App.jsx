import { Outlet } from "react-router-dom";
import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";
import { Button } from "./components/ui/Button/Button";
import { Title } from "./components/ui/Title";
import { MessageCard } from "./components/ui/MessageCard/MessageCard";
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
