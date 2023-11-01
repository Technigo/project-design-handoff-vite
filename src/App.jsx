import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/about" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
