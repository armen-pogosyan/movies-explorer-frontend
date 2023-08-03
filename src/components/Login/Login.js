import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function Login () {
//   const {values, handleChange, errors} = useFormAndValidation({
//     email: "",
//     password: ""
//  });
const values = {
  email: "pochta@yandex.ru",
  name: "Виталий",
  password: "123456"
}
  return (
    <>
      <AuthForm 
      title="Рады видеть!" 
      buttonText = "Войти"
      values={values}
      // handleChange={handleChange}
      // errors={errors}
      />
      
    </>
  );
}

export default Login;