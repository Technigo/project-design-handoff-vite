import { BrowserRouter, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { routes } from "./routes/routes";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>{routes}</Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};
