import { Header } from './components/Header';
import CardArray from './CardArray';
import { Container } from 'postcss';

export const App = () => {
  return (
    <div>
      {/* <h1 className="font-avenir text-4xl font-bold underline">
        Project handoff
      </h1>
      <h2 className="font-futura">Find me in src/app.jsx!</h2> */}
      <Header />
      <div>
        {CardArray.map((cardArray, index) => (
          <Card/>
        ))}
      </div>
    </div>
  );
};
