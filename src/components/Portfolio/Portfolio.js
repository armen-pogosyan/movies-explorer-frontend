import React from 'react';
import './Portfolio.css'
import linkImg from '../../images/link_portfolio.png';

function Portfolio() {
  return ( 
      <section className="portfolio">
        <h2 className="portfolio__title ">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__link-container">
            <a href="*" className="portfolio__link">Статичный сайт</a> 
            <a href="*" className="portfolio__link-ikon"><img src={linkImg} className="portfolio__ikon" alt="Стрелка для перехода"/></a> 
          </li>
          <li className="portfolio__link-container">
            <a href="*" className="portfolio__link">Адаптивный сайт</a>
            <a href="*" className="portfolio__link-ikon"><img src={linkImg} className="portfolio__ikon" alt="Стрелка для перехода"/></a>
          </li>
          <li className="portfolio__link-container">
            <a href="*" className="portfolio__link">Одностраничное приложение</a>
            <a href="*" className="portfolio__link-ikon"><img src={linkImg} className="portfolio__ikon" alt="Стрелка для перехода"/></a> 
          </li>
        </ul>
      </section>
  );
}

export default Portfolio