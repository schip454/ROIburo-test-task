import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/scss/scrollbar';
import 'swiper/css/navigation';
import { Scrollbar, Navigation } from 'swiper/modules';
import sliderImage1 from '../../assets/images/map-slider-1.jpg';
import sliderImage2 from '../../assets/images/map-slider-2.jpg';
import sliderImage3 from '../../assets/images/map-slider-3.jpg';
import { useRef } from 'react';

const images = [
  {
    src: sliderImage1,
    alt: 'Image 1',
  },
  {
    src: sliderImage2,
    alt: 'Image 2',
  },
  {
    src: sliderImage3,
    alt: 'Image 3',
  },
  {
    src: sliderImage1,
    alt: 'Image 4',
  },
  {
    src: sliderImage2,
    alt: 'Image 5',
  },
  {
    src: sliderImage3,
    alt: 'Image 6',
  },
  {
    src: sliderImage1,
    alt: 'Image 7',
  },
  {
    src: sliderImage2,
    alt: 'Image 8',
  },
  {
    src: sliderImage3,
    alt: 'Image 9',
  },
];

const MapSlider = () => {
  const swiperRef = useRef();
  return (
    <Swiper
      theme="material"
      className="map__slider-wrapper"
      spaceBetween={40}
      navigation
      modules={[Scrollbar, Navigation]}
      slidesPerView={3}
      scrollbar={{ draggable: true }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1.4,
        },
        768: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 2.4,
        },

        1101: {
          slidesPerView: 3,
        },

        1441: {
          slidesPerView: 4,
        },
      }}>
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <img src={image.src} alt={image.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MapSlider;
