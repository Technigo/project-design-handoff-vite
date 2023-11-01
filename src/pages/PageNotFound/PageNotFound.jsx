import { Error } from "../../components/ui/Error";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";

export const PageNotFound = () => {
  return (
    <>
      <Header />
      <Error />
      <Footer />
    </>
  );
};
