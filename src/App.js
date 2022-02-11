import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { Auth } from 'aws-amplify';
import routes from './routes';

import AppHeader from './cmps/AppHeader';
import AppFooter from './cmps/AppFooter';

const App = () => {
  const user = Auth?.user?.username;
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) dispatch({ type: 'SET_USER', user });
  }, []);
  return (
    <div className='page-contianer flex column'>
      <AppHeader user={user} />
      <main className='flex justify-center'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>{' '}
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          ))}{' '}
        </Switch>{' '}
      </main>{' '}
      <AppFooter />
    </div>
  );
};

export default App;
