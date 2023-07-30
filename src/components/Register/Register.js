import './Register.css'
import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function Register () {
  const {values, handleChange, errors} = useFormAndValidation({
    email: "",
   password: ""
 });
  return (
    <>
      <AuthForm 
      title="Добро пожаловать!"
      buttonText = "Зарегистрироваться"
      values={values}
      handleChange={handleChange}
      errors={errors}
      >
      <span className="auth__hint">Имя</span>
      <input className="auth__input" required id="name" name="name" type="text" value={values.name} onChange={handleChange} minLength={3}/>
      </AuthForm>
    </>
  );
}

export default Register;