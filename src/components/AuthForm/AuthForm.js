import './AuthForm.css';
import {Link} from 'react-router-dom';
import { useLocation} from 'react-router-dom'; 

function AuthForm ({title, buttonText, children, values, handleSubmit, handleChange, errors, isValid, isLockForm}) {
  const location = useLocation();

  return (
    <div className="auth">
      <Link to="/" className="auth__logo"></Link>
      <h2 className="auth__title">{title}</h2>
      <form onSubmit={handleSubmit} className="auth__form" name="form-register" noValidate>
      <fieldset  disabled={isLockForm ? true: false} style={{border: "none"}}> 
        {children}
        <span className="auth__hint">E-mail</span>
        <input className="auth__input" 
          id="email" name="email"
          type="email"
          placeholder="Введите e-mail" 
          value={values.email}
          onChange={handleChange}
          pattern ="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
          />
        <span className="auth__input-error">{errors.email}</span>
        <span className="auth__hint">Пароль</span>
        <input className="auth__input" required
          id="password" name="password"
          type="password"
          placeholder="Введите пароль"
          value={values.password}
          onChange={handleChange}
          minLength={8}/>
        <span className="auth__input-error">{errors.password}</span>
        <button type="submit" className={`auth__button-submit ${!isValid?"auth__button-submit_status_disabled":""}`} disabled={!isValid}>{buttonText}</button> 
        </fieldset>
      </form>
      {location.pathname ==="/signup"? 
      <div className="auth__link-auth"><p className="auth__text-status">Уже зарегистрированы?</p><Link to="/signin" className="signup__link">&nbsp;Войти</Link></div>:
      <div className="auth__link-auth"><p className="auth__text-status">Ещё не зарегистрированы?</p><Link to="/signup" className="signup__link">&nbsp;Регистрация</Link></div>}
    </div>
  );
}

export default AuthForm;