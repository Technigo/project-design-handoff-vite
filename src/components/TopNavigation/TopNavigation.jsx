import "./TopNavigation.css";

export const TopNavigation = () => {
  return (
    <header className="top-navigation p-66 lg:bg-cyan-500">
      <h1>TOP NAVIGATION</h1>
      <a href="#">GETTING STARTED</a>
      <a href="#">CLASSES</a>
      <button className="log_in-btn bg-crimson-light active:bg-plum-light hover:bg-terracotta  text-2xl">
        log in
      </button>
    </header>
  );
};
