import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/StartPage/Startpage';
import AboutPage from './components/AboutPage/AboutPage';


function App() {
  return (
      <Router>
          <Switch>
          <Route path="/" component={StartPage} />
              <Route path="/about" component={AboutPage} />
          </Switch>
      </Router>
  );
}

export default App;

