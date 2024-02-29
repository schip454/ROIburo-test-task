import infoIcon from '../../assets/images/info.svg';

const MapInfo = () => {
  return (
    <div className="map__info">
      <div className="map__info-wrapper">
        <img src={infoIcon} alt="Info icon" />
        <p className="map__info-text">
          Вход в офис находится на углу здания со стороны Ленинградского
          проспекта на пересечении с ул. Балтийская.
        </p>
      </div>
    </div>
  );
};

export default MapInfo;
