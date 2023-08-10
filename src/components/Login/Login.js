import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function Login ({loginUser}) {
  const {values, handleChange, errors, isValid} = useFormAndValidation({
    email: "",
    password: ""
 });

  const handleSubmit = (e)=> {
    e.preventDefault();
    loginUser(values);
  }

 
  return (
    <>
      <AuthForm 
      title="Рады видеть!" 
      buttonText = "Войти"
      values={values}
      handleChange={handleChange}
      errors={errors}
      isValid={isValid}
      handleSubmit={handleSubmit}
      />
      
    </>
  );
}

export default Login;