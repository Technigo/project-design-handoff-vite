import { Footer } from '../components/Footer'
import { MiddleSectionGet } from '../components/MiddleSectionGet'
import { ArticleSection } from '../components/ArticleSection';
import { AboveTheFold } from '../components/AboveTheFold';
import { Header } from '../components/Header';
import { ExploreFurther } from '../components/ExploreFurther';

export const LandingPage = () => {

    return (
        <div className="min-h-screen relative bg-gradient-to-b from-blue-grey to-grey">
            <Header />
            <AboveTheFold />
            <ArticleSection />
            <MiddleSectionGet />
            <ExploreFurther />
            <Footer />
        </div>
    )
}
