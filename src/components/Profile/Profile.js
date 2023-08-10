import './Profile.css';
import Header from '../Header/Header';
import React from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useFormAndValidation} from '../../hooks/useFormAndValidation';

function Profile({onMenuClick,loggedIn, updateUser, signOut}) {
  const currentUser = React.useContext(CurrentUserContext);
  const {values, handleChange, isValid} = useFormAndValidation({
    email: currentUser.email,
    password: "",
    name: currentUser.name
 });

  const handleSubmit = (e)=> {
    e.preventDefault();
    updateUser(values);
  }

  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <main className="profile">
        <h1 className="profile__title">{`Привет ${currentUser.name}!`}</h1>
        <form onSubmit={handleSubmit} className="profile__form" name="form-profile" id="form-profile" noValidate>
          <div className="profile__input-container">          
          <span className="profile__input-title">Имя</span>
          <input className="profile__input" required id="name" name="name" type="text" placeholder="Имя" value={values.name ?? currentUser.name} onChange={handleChange}/>
          </div>
          <div className="profile__input-container">     
            <span className="profile__input-title">E-mail</span>
            <input className="profile__input" required id="email" name="email" type="email" placeholder="email" value={values.email ?? currentUser.email} onChange={handleChange}/>
          </div>
        </form>
        <button type="submit" form="form-profile" className={`profile__button-edit ${!isValid?"profile__button-edit_status_disabled":""}`} disabled={!isValid} >Редактировать</button>
        <button type="button" className="profile__button-exit" onClick={signOut}>Выйти из аккаунта</button>
      </main>
    </>
  );
}

export default Profile;