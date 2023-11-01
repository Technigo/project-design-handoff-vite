import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";
import { useAppStore } from "./store/useAppStore";

export const App = () => {
  const lang = useAppStore((state) => state.lang);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
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
