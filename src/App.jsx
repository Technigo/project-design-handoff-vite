import CardArray from './CardArray';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { RetreatQuote } from './components/RetreatQuote';
import { Testimonial } from './components/Testimonial';

export const App = () => {
  return (
    <div>
      <Header />
      <RetreatQuote />
      <Testimonial />
      <Card />
    </div>
  );
};
