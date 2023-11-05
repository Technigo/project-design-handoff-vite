import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* The Layout component acts as a wrapper for all the routes */}
                <Route path="/" element={<Layout />}>
                    {/* The Home component will be rendered when the path is exactly "/" */}
                    <Route index element={<Home />} />

                    {/* The About component will be rendered when the path is "/about" */}
                    <Route path="/about" element={<About />} />

                    {/* 
                        The NoPage component will be rendered when none of the above paths match.
                        This is a catch-all route for handling 404 errors.
                    */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
