import { BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';
import { routes } from './routes/routes';
import { FindUs } from './components/Layout/findUs/findUs';
import { Footer } from './components/Layout/footer/Footer';


export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>{routes}</Routes>
                <FindUs />
                <Footer />
            </BrowserRouter>
        </>
    );
};
