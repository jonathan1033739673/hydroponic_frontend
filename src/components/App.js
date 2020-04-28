import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function App () {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route> <NotFound/> </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default App;