import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useSelector, useDispatch } from 'react-redux';

import { LoginMsg } from '../cmps/LoginMsg';
import Card from '../cmps/UI/Card';
import { utilService } from '../services/util.service';

const HomePage = () => {
  let user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!user)
        try {
          user = await Auth.currentAuthenticatedUser();
          user = user?.attributes.email;
          dispatch({ type: 'SET_USER', user });
          history.push('/todo');
        } catch (err) {
          console.log(err);
        }
    })();
  }, []);
  return (
    <Card className='home-container flex column'>
      <h1>Welcome To MyTodo</h1>
      <h2>{utilService.titleCase('in this app you can manage your todos')}</h2>
      <h3>{utilService.titleCase('those todos are unique per user!')}</h3>
      {!user && <LoginMsg />}
    </Card>
  );
};
export default HomePage;
