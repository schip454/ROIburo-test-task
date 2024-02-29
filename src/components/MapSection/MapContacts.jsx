import CopyBtn from './CopyBtn';
import phoneIcon from '../../assets/images/phone.svg';
import downloadIcon from '../../assets/images/download.svg';

const MapContacts = () => {
  return (
    <div className="map__contacts">
      <h3 className="map__contacts-title">Контакты</h3>
      <ul className="map__contacts-list">
        <li className="map__contacts-item">
          <div className="map__contacts-wrapper">
            <div className="map__contacts-info">
              <h4 className="map__contacts-infotitle">8-900-000-00-00</h4>
              <span className="map__contacts-infotext">Москва</span>
            </div>
            <div className="map__contacts-info">
              <h4 className="map__contacts-infotitle">8-900-000-00-00</h4>
              <span className="map__contacts-infotext">Россия</span>
            </div>
          </div>
          <CopyBtn />
        </li>
        <li className="map__contacts-item">
          <div className="map__contacts-info">
            <h4 className="map__contacts-infotitle">metall-market@mail.ru</h4>
            <span className="map__contacts-infotext">
              Ежедневно 9:00 — 18:00
            </span>
          </div>
          <CopyBtn />
        </li>
        <li className="map__contacts-item">
          <div className="map__contacts-info">
            <h4 className="map__contacts-infotitle">Адрес</h4>
            <span className="map__contacts-infotext">
              123456, г. Москва, ул. Ленина 3А, помещ. 2-7
            </span>
          </div>
        </li>
        <li className="map__contacts-item">
          <div className="map__contacts-info">
            <h4 className="map__contacts-infotitle">Время работы</h4>
            <span className="map__contacts-infotext">
              Ежедневно 9:00 — 18:00
            </span>
          </div>
        </li>
      </ul>
      <div className="map__contacts-controls">
        <button className="map__contacts-btn map__contacts-btn--map">
          <img src={downloadIcon} alt="" />
          Карта проезда
        </button>
        <button className="map__contacts-btn map__contacts-btn--call">
          <img src={phoneIcon} alt="" />
          Заказать звонок
        </button>
      </div>
    </div>
  );
};

export default MapContacts;
