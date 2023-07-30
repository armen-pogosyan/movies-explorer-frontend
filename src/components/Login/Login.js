import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function Login () {
  const {values, handleChange, errors} = useFormAndValidation({
    email: "",
    password: ""
 });
  return (
    <>
      <AuthForm 
      title="Рады видеть!" 
      buttonText = "Войти"
      values={values}
      handleChange={handleChange}
      errors={errors}
      />
      
    </>
  );
}

export default Login;