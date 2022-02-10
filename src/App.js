import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import routes from './routes';

import AppHeader from './cmps/AppHeader';
import AppFooter from './cmps/AppFooter';

export const App = () => {
  return (
    <div className='page-contianer flex column'>
      <AppHeader />
      <main className='flex justify-center'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </main>
      <AppFooter />
    </div>
  );
};
