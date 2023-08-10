import './PopupInfo.css'
import Popup from './Popup';

function PopupInfo ({isOpen, onClose, InfoTooltip}) {

    return (
      <Popup isOpen={isOpen} onClose={onClose} name="info">
        <div className="popup-info__content">
            <p>{InfoTooltip}</p>
            <button type="button" className="popup-info__close" onClick={onClose}>Закрыть</button>
        </div>  
      </Popup>
    );
  };

export default PopupInfo;