import { useSelector } from 'react-redux';
import { LoginMsg } from '../cmps/LoginMsg';
import { utilService } from '../services/util.service';

const HomePage = () => {
  const user = useSelector(state => state.user);
  return (
    <div className='home-container flex column align-center'>
      <h1>Welcome To MyTodo</h1>
      <h2>{utilService.titleCase('in this app you can manage your todos')}</h2>
      <h3>{utilService.titleCase('those todos are unique per user!')}</h3>
      {!user && <LoginMsg />}
    </div>
  );
};
export default HomePage;
