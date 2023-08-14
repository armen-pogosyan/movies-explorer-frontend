import './Register.css'
import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function Register ({registerUser, isLockForm}) {
  const {values, handleChange, errors, isValid} = useFormAndValidation({
    name:"",
    email: "",
    password: ""
 });
 const handleSubmit = (e)=>{
  e.preventDefault();
  registerUser(values);
}
  return (
    <>
      <AuthForm 
      title="Добро пожаловать!"
      buttonText = "Зарегистрироваться"
      values={values}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      isValid={isValid}
      >
      <span className="auth__hint">Имя</span>
      <input className="auth__input" required
        id="name" name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        minLength={3}
        isLockForm={isLockForm}/>
        <span className="auth__input-error">{errors.name}</span>
      </AuthForm>
    </>
  );
}

export default Register;