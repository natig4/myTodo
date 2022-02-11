import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useDispatch } from 'react-redux';
import '@aws-amplify/ui-react/styles.css';
const Login = () => {
  const user = API.Auth?.user?.username;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'SET_USER', user });
    if (user) history.push('/todo');
  }, []);
  return (
    <div className='login-container flex column align-center'>
      This is where the login Going to be
    </div>
  );
};
export default withAuthenticator(Login);
