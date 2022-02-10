import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <section className='app-header'>
      <header className=' flex space-between align-center'>
        <NavLink to='/'>
          <div className='logo'>MyTodo</div>
        </NavLink>

        <nav className='nav-links clean-list flex align-center'>
          <NavLink to='/login'>Login</NavLink> |
          <NavLink to='/todo'>Todos</NavLink>|
          <NavLink to='/about'>About</NavLink>
        </nav>
      </header>
    </section>
  );
};

export default AppHeader;
