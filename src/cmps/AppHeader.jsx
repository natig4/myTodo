import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './UI/Button';
import { Auth } from 'aws-amplify';

const AppHeader = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = () => {
    Auth.signOut();
    dispatch({ type: 'SET_USER', user: '' });
  };
  return (
    <section className='app-header'>
      <header className=' flex space-between align-center'>
        <NavLink to='/'>
          <div className='logo'>MyTodo</div>
        </NavLink>

        <nav className='nav-links clean-list flex align-center'>
          <NavLink to='/todo'>Todos</NavLink>|
          <NavLink to='/about'>About</NavLink>|
          {user ? (
            <Button
              onClick={signOut}
              txt={'Logout'}
              className='sign-out-btn'></Button>
          ) : (
            <Button
              onClick={() => {
                history.push('/login');
              }}
              txt={'Login'}
              className='login-btn'></Button>
          )}
        </nav>
      </header>
    </section>
  );
};

export default AppHeader;
