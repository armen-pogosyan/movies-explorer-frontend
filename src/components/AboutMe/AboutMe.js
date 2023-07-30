import React from 'react';
import './AboutMe.css'

function AboutMe() {
  return ( 
    <section className="about-me">
      <h2 className="about-me__title" id="about-me">Студент</h2>
      <div className="about-me__line"></div>      
      <div className="about-me__container">
        <div className="about-me__cont-description">
          <h3 className="about-me__subtitle">Армен</h3>
          <p className="about-me__description">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__story">Я  живу в Кисловодске, закончил факультет информационных систем и технологий ПГТУ. Увлекаюсь разными видами спорта, люблю собираться с друзьями и весело проводить время около мангала. Работал продолжительное время 1с программистом, решил освоить что-то новое.</p>
          <a href="https://github.com/" className="about-me__git-link">Github</a>
        </div>
        <img src={require('../../images/me.png')} className="about-me__image" alt="Фото"/>
      </div>
    </section> 
  );
}
export default AboutMe;