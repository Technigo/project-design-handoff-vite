import { Navbar } from "../components/navbar/Navbar";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <section className="yoga-start-section"></section>
      <section className="yoga-classes-section"></section>
      <section className="yoga-types-section"></section>
      <section className="yoga-benefits-section"></section>
      <section className="yoga-teachers-section"></section>
      <section className="yoga-about-section"></section>
      Home
    </div>
  );
};
