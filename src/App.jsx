import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
export const App = () => {
  return (
    <main>
      {/* Set the Link to another page */}
      <section>
        <FirstPage />
      </section>
      {/* <section>
        <SecondPage />
      </section> */}
    </main>
  );
};
