import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/scss/scrollbar';
import 'swiper/css/navigation';

import sliderImage1 from '../../assets/images/team-slider-1.jpg';
import sliderImage2 from '../../assets/images/team-slider-2.jpg';
import sliderImage3 from '../../assets/images/team-slider-3.jpg';
import sliderImage4 from '../../assets/images/team-slider-4.jpg';

const teamInfo = [
  {
    src: sliderImage1,
    name: 'Ворончихин Сергей Вячеславович',
    job: 'Директор',
  },
  {
    src: sliderImage2,
    name: 'Ситникова Александра Константиновна',
    job: 'Офис-менеджер',
  },
  {
    src: sliderImage3,
    name: 'Лазарева Валерия Максимовна',
    job: 'Бухгалтер',
  },
  {
    src: sliderImage4,
    name: 'Наумов Илья Семёнович',
    job: 'Руководитель отдела продаж',
  },
  {
    src: sliderImage1,
    name: 'Ворончихин Сергей Вячеславович',
    job: 'Директор',
  },
  {
    src: sliderImage2,
    name: 'Ситникова Александра Константиновна',
    job: 'Офис-менеджер',
  },
  {
    src: sliderImage3,
    name: 'Лазарева Валерия Максимовна',
    job: 'Бухгалтер',
  },
  {
    src: sliderImage4,
    name: 'Наумов Илья Семёнович',
    job: 'Руководитель отдела продаж',
  },
];

const TeamSlider = () => {
  const swiperRef = useRef();
  return (
    <Swiper
      theme="material"
      className="map__slider-wrapper team__slider"
      spaceBetween={40}
      modules={[Navigation, Scrollbar]}
      navigation
      scrollbar={{ draggable: true }}
      slidesPerView={4}
      breakpoints={{
        375: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1.8,
        },

        870: {
          slidesPerView: 2.8,
        },
        921: {
          slidesPerView: 3,
        },
        1025: {
          slidesPerView: 3.2,
        },

        1441: {
          slidesPerView: 4,
        },
      }}
      pagination={{ clickable: true }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}>
      {teamInfo.map((image, i) => (
        <SwiperSlide key={i}>
          <div className="team__item">
            <img className="team__item-img" src={image.src} alt={image.name} />
            <div className="team__item-info">
              <h5 className="team__item-title">{image.name} </h5>
              <p className="team__item-job">{image.job}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
