import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import {useFormAndValidation} from '../../hooks/useFormAndValidation'

function Login ({loginUser, isLockForm}) {
  const {values, handleChange, errors, isValid} = useFormAndValidation({
    email: "",
    password: "",
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
      isLockForm={isLockForm}
      />
      
    </>
  );
}

export default Login;