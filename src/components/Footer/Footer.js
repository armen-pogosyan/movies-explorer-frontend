import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__line"></div>
      <div className="footer__cont">
        <p className="footer__text">© {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li><a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/" className="footer__link">Github</a></li>
        </ul>
      </div>
  </footer>
  );
}

export default Footer;

