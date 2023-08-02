import React from 'react';
import './Portfolio.css'

function Portfolio() {
  return ( 
      <section className="portfolio">
        <h2 className="portfolio__title ">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__link-container">
            <a href="https://github.com/armen11777/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">Статичный сайт</a> 
            <a href="https://github.com/armen11777/how-to-learn" className="portfolio__link-ikon" target="_blank" rel="noreferrer">↗</a> 
          </li>
          <li className="portfolio__link-container">
            <a href="https://github.com/armen11777/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <a href="https://github.com/armen11777/russian-travel" className="portfolio__link-ikon" target="_blank" rel="noreferrer">↗</a>
          </li>
          <li className="portfolio__link-container">
            <a href="https://github.com/armen11777/mesto-react" className="portfolio__link" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <a href="https://github.com/armen11777/mesto-react" className="portfolio__link-ikon" target="_blank" rel="noreferrer">↗</a> 
          </li>
        </ul>
      </section>
  );
}

export default Portfolio