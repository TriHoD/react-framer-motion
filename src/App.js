import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import GlobalStyle from './globalStyles'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
