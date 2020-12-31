import React from 'react';
import './App.css';
import { Home, About, Contact } from './pages';
import { Nav } from './Layout';
import { BrowserRouter as Router, Switch, Route 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>    
      </Router>
    </div>
  );
}

export default App;