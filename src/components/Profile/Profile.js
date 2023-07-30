import './Profile.css';
import Header from '../Header/Header';

function Profile({onMenuClick,loggedIn }) {
  return (
    <>
      <Header onMenuClick={onMenuClick} loggedIn={loggedIn} />
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form onSubmit={()=>{}} className="profile__form" name="form-profile" noValidate>
          <div className="profile__input-container">          
          <span className="profile__input-title">Имя</span>
          <input className="profile__input" required id="name" name="name" type="text" placeholder="Виталий"/>
          </div>
          <div className="profile__input-container">     
            <span className="profile__input-title">E-mail</span>
            <input className="profile__input" required id="email" name="email" type="text" placeholder="pochta@yandex.ru"/>
          </div>
        </form>
        <button className="profile__button-edit">Редактировать</button>
        <button className="profile__button-exit">Выйти из аккаунта</button>
      </div>
    </>
  );
}

export default Profile;