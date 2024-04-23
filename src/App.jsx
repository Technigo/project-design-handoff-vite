import { Header } from './components/Header';
import CardArray from './CardArray';
import { Container } from 'postcss';
import { Card } from './components/Card';

export const App = () => {
  return (
    <div>
      {/* <h1 className="font-avenir text-4xl font-bold underline">
        Project handoff
      </h1>
      <h2 className="font-futura">Find me in src/app.jsx!</h2> */}
      <Header />
      <div>
        {CardArray.map((item, id) => (
          <Card key={id} item={item}  />
        ))}
      </div>
    </div>
  );
};
