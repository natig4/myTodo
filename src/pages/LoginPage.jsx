import { useHistory } from 'react-router-dom';
import LoginCmp from '../cmps/LoginCmp';
import { Button } from '../cmps/UI/Button';
export const Login = () => {
  const history = useHistory();
  return (
    <section className='login-container flex column'>
      <Button
        onClick={() => {
          history.goBack();
        }}
        className='login-page-btn'
        txt='Go Back'
      />
      <LoginCmp />
    </section>
  );
};
