import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useDispatch } from 'react-redux';
import '@aws-amplify/ui-react/styles.css';
const LoginCmp = () => {
  const user = Auth?.user.attributes.email;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'SET_USER', user });
    if (user) history.push('/todo');
  }, []);
  return <></>;
};
export default withAuthenticator(LoginCmp);
