import { useHistory } from 'react-router-dom';
import { Button } from './UI/Button';

export const LoginMsg = () => {
  const history = useHistory();
  return (
    <div className='login-msg flex'>
      <h1>Login here to view your todos </h1>
      <Button
        onClick={() => {
          history.push('/login');
        }}
        txt={'Login'}
        className='login-btn'></Button>
    </div>
  );
};
