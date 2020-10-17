import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './scss/styles.scss';
import Home from './pages/Home'
import AllBooks from './pages/AllBooks'

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </main>
  );
}

export default App;
