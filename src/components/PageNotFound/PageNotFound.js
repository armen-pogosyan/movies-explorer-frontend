import { useNavigate } from "react-router-dom";
import './PageNotFound.css'

function PageNotFound() {
  const navigate = useNavigate();
  document.body.style.backgroundColor="#FFFFFF";
  return (
    <div className="not-found">
      <p className="not-found__number">404</p>
      <h3 className="not-found__title">Страница не найдена</h3>
      <button className="not-found__button" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default PageNotFound;