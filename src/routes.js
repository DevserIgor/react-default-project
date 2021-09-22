import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './page/Main';
import Repository from './page/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
