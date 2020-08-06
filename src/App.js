import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import {Addemployee} from './components/Addemployees'
import { Editemployee } from './components/Editemployees';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
 <BrowserRouter>
    <GlobalProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={Addemployee} exact />
          <Route path="/edit/:id" component={Editemployee} exact />
        </Switch>
      </GlobalProvider>
</BrowserRouter>
    
  );
}

export default App;



