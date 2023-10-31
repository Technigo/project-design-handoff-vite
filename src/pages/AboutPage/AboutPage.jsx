import { Suspense } from "react";
import { AboutContact } from "../../components/sections/AboutContact";
import { AboutHero } from "../../components/sections/AboutHero";
import { Loader } from "../../components/ui/Loader";
import styles from "./AboutPage.module.scss";
import { ScrollToTop } from "../../components/ui/ScrollToTop";

export const AboutPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <div className={styles.about_page}>
        <AboutHero />
        <AboutContact />
      </div>
    </Suspense>
  );
};
