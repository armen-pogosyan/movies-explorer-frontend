import './AuthForm.css';
import {Link} from 'react-router-dom';
import { useLocation} from 'react-router-dom'; 

function AuthForm ({title, buttonText, children, values, handleChange, errors}) {
  const location = useLocation();
  return (
    <>
    <div className="auth">
      <Link to="/" className="auth__logo"></Link>
      <h2 className="auth__title">{title}</h2>
      <form onSubmit={()=>{}} className="auth__form" name="form-register" noValidate>
        {children}
        <span className="auth__hint">E-mail</span>
        <input className="auth__input" required id="email" name="email" type="text"  value={values.email} onChange={handleChange} minLength={3}/>
        <span className="auth__hint">Пароль</span>
        <input className="auth__input" required  id="password" name="password" type="password" value={values.password} onChange={handleChange} minLength={3}/>
        <span className="auth__input-error">{errors.password}</span>
        <button type="submit" className="auth__button-submit">{buttonText}</button> 
      </form>
      {location.pathname ==="/signup"? 
      <div className="auth__link-auth"><p className="auth__text-status">Уже зарегистрированы?</p><Link to="/signin" className="signup__link">&nbsp;Войти</Link></div>:
      <div className="auth__link-auth"><p className="auth__text-status">Ещё не зарегистрированы?</p><Link to="/signup" className="signup__link">&nbsp;Регистрация</Link></div>}
    </div>
    </>
  );
}

export default AuthForm;