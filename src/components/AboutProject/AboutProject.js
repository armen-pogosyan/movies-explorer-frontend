import React from 'react';
import './AboutProject.css'

function AboutProject() {

  return ( 
    <section className="about-project">
      <h2 className="about-project__title" id="about-project">О проекте</h2>
      <div className="about-project__line"></div>
      <div className='about-project__container'>
        <h3 className='about-project__text-title' id ="about-project">Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project__text-title'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__text-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='about-project__text-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        <div className='about-project__duration-container'>
          <p className='about-project__duration-back'>1 неделя</p>
          <p className='about-project__duration-front'>4 недели</p>
        </div>
        <div className='about-project__label-container'> 
          <p className="about-project__label-back">Back-end</p>
          <p className="about-project__label-front">Front-end</p>
        </div>
      </div> 
    </section>
 
  );
}
export default AboutProject;