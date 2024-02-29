import { YMaps, Map } from 'react-yandex-maps';
import MapContacts from './MapContacts';
import MapInfo from './MapInfo';
import MapSlider from './MapSlider';

const MapSection = () => {
  return (
    <section className="map">
      <div className="map__content">
        <YMaps>
          <Map
            className="map__item"
            width="100%"
            height="720px"
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          />
        </YMaps>
      </div>
      <MapInfo />
      <MapContacts />
      <div className="map__slider">
        <MapSlider />
      </div>
    </section>
  );
};

export default MapSection;
