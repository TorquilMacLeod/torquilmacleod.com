import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Header, Blog, Portfolio, Contact } from './components';

function App() {
  return (
    <Router>
      {/* Redirect to blog if at root level */}
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/'>
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;